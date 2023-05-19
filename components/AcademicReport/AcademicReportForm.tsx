import Footer from "../Footer/Footer";

interface AcademicReportFormProps {
    setHtno: (htno: string) => void;
    warning: string;
    submit: () => Promise<void>;
}

const AcademicReportForm = ({ setHtno, warning, submit }: AcademicReportFormProps) => {
    return (
        <>
            <div className="w-[66%] mx-[17%]">
                <div className="mx-[0.25%]  border-black shadow-2xl border-[3px] rounded-md ">
                    <center className="py-[35px]">
                        <br />
                        <h2 className="leading-normal  font-semibold mx-1  text-[1xl] sm:text-2xl">
                            Academic Performance of a Selected Student
                        </h2>

                        <br />
                        <br />
                        <input name="htno"
                            onChange={(event) => {
                                event.target.value = event.target.value.toUpperCase();
                                setHtno(event.target.value)

                            }}
                            className="border-[1px] m-[9.8px] border-double border-black rounded text-rounded text-center text-[60%]  shadow-xl w-[150px] h-[28px] sm:w-[200px] sm:h-[35px] sm:text-[100%] md:m-0"
                            type="text"
                            maxLength={10}
                            placeholder="Enter your hall ticket no"
                        />
                        <br />
                        <br />
                        <p className="text-[60%] text-red-600">{warning}</p>
                        <br />
                        <br />
                        <button type="submit" onClick={submit} className="w-[100px] text-white	bg-blue-700 rounded text-[85%] hover:bg-yellow-400 py-[0.15em] px-[1.2em] sm:w-[100px] sm:text-[100%]" >
                            Results
                        </button>
                        <br />
                        <br />
                    </center>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default AcademicReportForm