import { Dispatch, SetStateAction, useState } from 'react';
import AcademicReportForm from './AcademicReportForm';
import AcademicReportResult from './AcademicReportResult';
import axios from 'axios';
import Loading from '../Loading/Loading';
const AcademicReportPage = () => {
    const [result, setResult] = useState([]);
    const [reportForm, setReportForm] = useState(true)
    const [loading, SetLoading] = useState(false);
    const submit = async () => {
        if (htno.length != 10) {
            setWarning("The Hall Ticket Should be 10 digits");
        }
        else {
            setWarning("")
            SetLoading(true);
            setReportForm(false);
            const url = "https://ts-ssc-results.up.railway.app/getresultbyhtno/?htno=" + htno
            try {
                const response = await axios.get(url, { mode: 'cors' });
                if (response.status == 500) {

                }
                else if (response.status == 400) {

                }
                else {
                    console.log(response.data);
                    SetLoading(false);
                    setResult(response.data)
                    setReportForm(false)

                }
            }
            catch
            {
                alert("Please Enter the Roll Number Correctly!!!")
                SetLoading(false);
                setReportForm(true);

            }






        }
    }
    const [htno, setHtno] = useState("");
    const [warning, setWarning] = useState("");
    return (<div className='pt-[75px]'>
        <br />
        <div className={`${reportForm ? 'block' : 'hidden'} md:my-[50px]`}>
            <AcademicReportForm warning={warning} setHtno={setHtno} submit={submit} />
        </div>
        <div className={loading ? 'block' : 'hidden'}>
            <Loading />
        </div>
        <div className={`${(!reportForm && !loading) ? 'block' : 'hidden'}`}>
            <AcademicReportResult query={result} />
        </div>

    </div>)
}

export default AcademicReportPage;