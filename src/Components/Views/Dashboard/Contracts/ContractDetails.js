import React, { useEffect, useState } from 'react'

function ContractDetails({ contract }) {
    const [contractArray, setContractArray] = useState([])

    useEffect(() => {
        setContractArray(contract?.split('\n'))
    }, [contract])


    return (
        <div>
            <div>
                <p class="contract-details">
                    {
                        contractArray.map(item => {
                            return (
                                <>
                                    {item}
                                    <br />
                                    <br />
                                </>
                            )
                        })
                    }
                </p>
            </div>

        </div>
    )
}

export default ContractDetails
