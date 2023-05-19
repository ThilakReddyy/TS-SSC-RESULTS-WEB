const AcademicReportResult = ({ query }) => {
    return (<>
        <div className="m-2 text-[55%] sm:text-[80%] md:text-[80%] lg:text-[100%]">
            {query.map((res, index) => {
                var details = res["Details"]
                var results = res["Results"]
                return (
                    <>
                        <table className="w-[100%] mt-4">
                            <tbody>
                                <tr className='w-max bg-gray-200 text-[130%] sm:text-[100%]'>
                                    <th className="w-[28%]">Roll Number</th>
                                    <th>Student Name</th>

                                </tr>
                                <tr>
                                    <th>{details["Roll Number"]}</ th>
                                    <th>{details["Student Name"]}</ th>
                                </tr>

                            </tbody>

                        </table>
                        <table className="w-[100%] ">
                            <tbody>
                                <tr className='w-max bg-gray-200 sm:text-[100%]'>
                                    <th>Subject Name</th>
                                    <th>Grade FA</th>
                                    <th>Grade SA</th>
                                    <th>Subject Grade</th>
                                    <th>Subject Grade point</th>

                                </tr>

                                {results.map((val, index) => {
                                    console.log(index == 6, val)
                                    return (
                                        <>
                                            {index == 6 ? <><div className="my-[1px]"></div></> : <></>}
                                            <tr className='w-max sm:text-[100%]'>
                                                <th>{val["Subject Name"]}</th>
                                                <th>{val["Grade FA"]}</th>
                                                <th>{val["Grade SA"]}</th>
                                                <th>{val["Subject Grade"]}</th>
                                                <th>{val["Subject Grade point"]}</th>

                                            </tr>
                                        </>
                                    )
                                })}

                            </tbody>

                        </table>
                        <table className="w-[100%] ">
                            <tbody>
                                <tr >
                                    <th className="w-max text-[130%] sm:text-[100%] w-[49.1%]">CGPA</th>
                                    <th>{res["CGPA"]}</th>

                                </tr>
                                <tr>
                                    <th className="w-max  text-[130%] sm:text-[100%] w-[49.1%]">Result</ th>
                                    <th>{res["Result"]}</ th>
                                </tr>

                            </tbody>

                        </table>
                    </>
                )

            })}
        </div>
        {/*<>
            <div className="m-2 text-[45%] sm:text-[60%] md:text-[80%] lg:text-[100%]">
                <table className="w-[100%] my-2">
                    <tbody>
                        <tr className='w-max bg-gray-200'>
                            {Object.keys(Details).map((value, index) => { return <><th>{value}</th></> })}

                        </tr>
                        <tr>
                            {Object.keys(Details).map((value, index) => { return <><th>{Details[value]}</th></> })}
                        </tr>
                    </tbody>
                </table>
                {Object.keys(Results).map((val) => {
                    if (val != 'Total') {
                        return <>
                            <div id='1'>
                                <table className="w-[100%]">
                                    <tbody>
                                        <tr>
                                            <th>{val} Results</th>
                                        </tr>
                                    </tbody>
                                </table>

                                <table>
                                    <tbody>
                                        <tr className="w-max bg-gray-200">
                                            <th>SUBJECT_CODE</th>
                                            <th>SUBJECT_NAME</th>
                                            <th>GRADE</th>
                                            <th>CREDITS</th>
                                        </tr>
                                        {Object.keys(Results[val]).map(function (item, index) {
                                            if (item != 'CGPA' & item != 'total' & item != 'credits') {
                                                return <><tr>
                                                    <th>{Results[val][item]['subject_code']}</th>
                                                    <th>{Results[val][item]['subject_name']}</th>

                                                    <th>{Results[val][item]['subject_grade']}</th>
                                                    <th>{Results[val][item]['subject_credits']}</th>
                                                </tr>
                                                </>
                                            }
                                        })}
                                    </tbody>
                                </table>
                                <table>
                                    <tbody>
                                        <tr>
                                            <th style={{ width: '75%' }}>CGPA</th>
                                            <th>{Results[val]['CGPA']}</th>
                                        </tr>
                                    </tbody>
                                </table>
                                <br />
                            </div>
                        </>
                    }
                })}
                <div className='Total'>
                    <table>
                        <tbody >
                            <tr>
                                <th className="py-2" style={{ width: '75%' }}>Total CGPA</th>
                                <th>{Results['Total']}</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
*/}    </>)
}

export default AcademicReportResult;