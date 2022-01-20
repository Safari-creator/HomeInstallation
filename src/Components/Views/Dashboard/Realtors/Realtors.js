import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './Realtors.css';
import NativeSelect from '@mui/material/NativeSelect';
import PropTypes from 'prop-types';
import { useAutocomplete } from '@mui/core/AutocompleteUnstyled';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useHistory } from 'react-router-dom'
import { Modal, ModalBody } from 'react-bootstrap';

/**
 * table and rows 
 */
const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
  {
    id: 'population',
    label: 'Population',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'Size\u00a0(km\u00b2)',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'density',
    label: 'Density',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}


const rows = [
  createData('India', 'IN', 1324171354, 3287263),
  createData('China', 'CN', 1403500365, 9596961),
  createData('Italy', 'IT', 60483973, 301340),
  createData('United States', 'US', 327167434, 9833520),
  createData('Canada', 'CA', 37602103, 9984670),
  createData('Australia', 'AU', 25475400, 7692024),
  createData('Germany', 'DE', 83019200, 357578),
  createData('Ireland', 'IE', 4857000, 70273),
  createData('Mexico', 'MX', 126577691, 1972550),
  createData('Japan', 'JP', 126317000, 377973),
  createData('France', 'FR', 67022000, 640679),
  createData('United Kingdom', 'GB', 67545757, 242495),
  createData('Russia', 'RU', 146793744, 17098246),
  createData('Nigeria', 'NG', 200962417, 923768),
  createData('Brazil', 'BR', 210147125, 8515767),
];

const Root = styled('div')(
  ({ theme }) => `
    color: ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.65)' : 'rgba(0,0,0,.85)'
    };
    font-size: 14px;
  `,
);

const Label = styled('label')`
    padding: 0 0 4px;
    line-height: 1.5;
    display: block;
  `;

const InputWrapper = styled('div')(
  ({ theme }) => `
    width: 300px;
    border: 1px solid ${theme.palette.mode === 'dark' ? '#434343' : '#d9d9d9'};
    background-color: ${theme.palette.mode === 'dark' ? '#141414' : '#fff'};
    border-radius: 4px;
    padding: 1px;
    display: flex;
    flex-wrap: wrap;
  
    &:hover {
      border-color: ${theme.palette.mode === 'dark' ? '#177ddc' : '#40a9ff'};
    }
  
    &.focused {
      border-color: ${theme.palette.mode === 'dark' ? '#177ddc' : '#40a9ff'};
      box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
    }
  
    & input {
      background-color: ${theme.palette.mode === 'dark' ? '#141414' : '#fff'};
      color: ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.65)' : 'rgba(0,0,0,.85)'
    };
      height: 30px;
      box-sizing: border-box;
      padding: 4px 6px;
      width: 0;
      min-width: 30px;
      flex-grow: 1;
      border: 0;
      margin: 0;
      outline: 0;
    }
  `,
);

function Tag(props) {
  const { label, onDelete, ...other } = props;
  return (
    <div {...other}>
      <span>{label}</span>
      <CloseIcon onClick={onDelete} />
    </div>
  );
}

Tag.propTypes = {
  label: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

const StyledTag = styled(Tag)(
  ({ theme }) => `
    display: flex;
    align-items: center;
    height: 24px;
    margin: 2px;
    line-height: 22px;
    background-color: ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.08)' : '#fafafa'
    };
    border: 1px solid ${theme.palette.mode === 'dark' ? '#303030' : '#e8e8e8'};
    border-radius: 2px;
    box-sizing: content-box;
    padding: 0 4px 0 10px;
    outline: 0;
    overflow: hidden;
  
    &:focus {
      border-color: ${theme.palette.mode === 'dark' ? '#177ddc' : '#40a9ff'};
      background-color: ${theme.palette.mode === 'dark' ? '#003b57' : '#e6f7ff'};
    }
  
    & span {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  
    & svg {
      font-size: 12px;
      cursor: pointer;
      padding: 4px;
    }
  `,
);

const Listbox = styled('ul')(
  ({ theme }) => `
    width: 300px;
    margin: 2px 0 0;
    padding: 0;
    position: absolute;
    list-style: none;
    background-color: ${theme.palette.mode === 'dark' ? '#141414' : '#fff'};
    overflow: auto;
    max-height: 250px;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    z-index: 1;
  
    & li {
      padding: 5px 12px;
      display: flex;
  
      & span {
        flex-grow: 1;
      }
  
      & svg {
        color: transparent;
      }
    }
  
    & li[aria-selected='true'] {
      background-color: ${theme.palette.mode === 'dark' ? '#2b2b2b' : '#fafafa'};
      font-weight: 600;
  
      & svg {
        color: #1890ff;
      }
    }
  
    & li[data-focus='true'] {
      background-color: ${theme.palette.mode === 'dark' ? '#003b57' : '#e6f7ff'};
      cursor: pointer;
  
      & svg {
        color: currentColor;
      }
    }
  `,
);

const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
]

const Realtors = ({ setTab }) => {

  /**
   * For colum data
   */
  const history = useHistory()
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [searchKey, setSearchKey] = useState('')
  const [filteredArray, setFilteredArray] = useState([])

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getTagProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    value,
    focused,
    setAnchorEl,
  } = useAutocomplete({
    id: 'customized-hook-demo',
    defaultValue: [top100Films[1]],
    multiple: true,
    options: top100Films,
    getOptionLabel: (option) => option.title,
  });

  const [user, setUser] = useState([]);
  const [userId, setUserId] = useState(sessionStorage.getItem('userId'))

  useEffect(() => {
    axios.get('http://34.198.19.55:8000/realtors')
      .then(res => {
        const dataArray = res.data.data
        setUser(dataArray.filter(item => item.user_id == userId));
        setFilteredArray(dataArray.filter(item => item.user_id == userId))
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  useEffect(() => {
    setFilteredArray(user.filter(item => item.name.includes(searchKey)))
  }, [searchKey])

  async function deleteRealtor(id) {
    const response = await axios.delete('http://34.198.19.55:8000/realtors/' + id)
    console.log(response)
    if (response)
      window.location.reload()
  }

  return (
    // <div className="dashboard-section">
    //   <section className="dashboard-body column">
    //     <div className="dashboard-left width100">
    //       <div className="two-columns">
    //         <div className="today-section width100">
    //           <div className="today-body space-between">
    //             <div>
    //               <NativeSelect
    //                 defaultValue={30}
    //                 inputProps={{
    //                   name: 'age',
    //                   id: 'uncontrolled-native',
    //                 }}
    //               >
    //                 <option value={10}>Ten</option>
    //                 <option value={20}>Twenty</option>
    //                 <option value={30}>Thirty</option>
    //               </NativeSelect>
    //             </div>
    //             <div>
    //               <Root>
    //                 <div {...getRootProps()}>
    //                   <Label {...getInputLabelProps()}>Customized hook</Label>
    //                   <InputWrapper ref={setAnchorEl} className={focused ? 'focused' : ''}>
    //                     {value.map((option, index) => (
    //                       <StyledTag label={option.title} {...getTagProps({ index })} />
    //                     ))}

    //                     <input {...getInputProps()} />
    //                   </InputWrapper>
    //                 </div>
    //                 {groupedOptions.length > 0 ? (
    //                   <Listbox {...getListboxProps()}>
    //                     {groupedOptions.map((option, index) => (
    //                       <li {...getOptionProps({ option, index })}>
    //                         <span>{option.title}</span>
    //                         <CheckIcon fontSize="small" />
    //                       </li>
    //                     ))}
    //                   </Listbox>
    //                 ) : null}
    //               </Root>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="dashboard-left width100">
    //       <div className="two-columns">
    //         <div className="today-section width100">
    //           <div className="today-body">
    //             <TableContainer sx={{ maxHeight: 440 }}>
    //               <Table stickyHeader aria-label="sticky table">
    //                 <TableHead>
    //                   <TableRow>
    //                     {columns.map((column) => (
    //                       <TableCell
    //                         key={column.id}
    //                         align={column.align}
    //                         style={{ minWidth: column.minWidth }}
    //                       >
    //                         {column.label}
    //                       </TableCell>
    //                     ))}
    //                   </TableRow>
    //                 </TableHead>
    //                 <TableBody>
    //                   {rows
    //                     .slice(page  rowsPerPage, page  rowsPerPage + rowsPerPage)
    //                     .map((row) => {
    //                       return (
    //                         <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
    //                           {columns.map((column) => {
    //                             const value = row[column.id];
    //                             return (
    //                               <TableCell key={column.id} align={column.align}>
    //                                 {column.format && typeof value === 'number'
    //                                   ? column.format(value)
    //                                   : value}
    //                               </TableCell>
    //                             );
    //                           })}
    //                         </TableRow>
    //                       );
    //                     })}
    //                 </TableBody>
    //               </Table>
    //             </TableContainer>
    //             <TablePagination
    //               rowsPerPageOptions={[10, 25, 100]}
    //               component="div"
    //               count={rows.length}
    //               rowsPerPage={rowsPerPage}
    //               page={page}
    //               onPageChange={handleChangePage}
    //               onRowsPerPageChange={handleChangeRowsPerPage}
    //             />
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="row-reverse">
    //       <button className="add-realtors">Add Realtors</button>
    //     </div>

    //   </section>
    // </div>
    <div className="extrapages-section Realtors-list-page">
      <section className="body-part">
        <div class="body-part-one">
          <div class="part-one-left">
          </div>
          <div class="part-one-right">
            <p>Search</p>
            <input type="text" style={{ width: 250 }} placeholder="Enter Name.." onChange={(e) => setSearchKey(e.target.value)}></input>
          </div>
        </div>
        <div class="body-part-two">
          <div class="part-two-content">
            <div class="heading">
              <div className='col-3'>
                <p>Name</p>
              </div>
              <div className='col-1'>
                <p>Type</p>
              </div>
              <div className='col-3'>
                <p>Email</p>
              </div>
              <div className='col-3'>
                <p>Company</p>
              </div>
              <div className='col-2'>
                <p>Action</p>
              </div>
            </div>
            <div className='d-flex flex-column table-body-part'>
              {
                filteredArray.map(item => {
                  return (
                    <div className='d-flex' key={item.id}>
                      <div className='col-3'>
                        <p>{item.name}</p>
                      </div>
                      <div className='col-1'>
                        <p>{item.agent_type ? item.agent_type : 'Not Set'}</p>
                      </div>
                      <div className='col-3'>
                        <p>{item.email}</p>
                      </div>
                      <div className='col-3'>
                        <p>{item.company_name}</p>
                      </div>
                      <div className='col-2'>
                        <div className='w-100 text-center'>
                          {/* <span className='dlt-btn'>View</span>&nbsp;/&nbsp; */}
                          <span className='dlt-btn' onClick={() => deleteRealtor(item.id)}>Delete</span>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
        <div class="button">
          <button onClick={() => history.push('/AddRealtor')}>Add New Realtors</button>
        </div>
      </section>
      {/* <Modal>
        <ModalBody>

        </ModalBody>
      </Modal> */}
    </div>
  );
}

export default Realtors;