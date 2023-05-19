import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import AsyncSelect from 'react-select/async';
import data from './schools';

interface ClassReportFormProps {
    setSchoolCode: (collegecode: string) => void;
    warning: string;
    submit: () => Promise<void>;
}

const ClassReportForm = ({ setSchoolCode, warning, submit }: ClassReportFormProps) => {
    const [schoolOptionsData, setSchoolOptionsData] = useState([{ 'label': '', 'value': '' }]);

    const filterOptions = (inputValue: string) => {
        return schoolOptionsData.filter((option) =>
            option.label.toLowerCase().startsWith(inputValue.toLowerCase())
        );
    };

    const loadOptions = (inputValue: string, callback: (options: any[]) => void) => {
        setTimeout(() => {
            const filteredOptions = filterOptions(inputValue);
            callback(filteredOptions);
        }, 1000);
    };

    useEffect(() => {
        const tempOptions = Object.entries(data).map(([key, value]) => ({
            label: value,
            value: key
        }));
        setSchoolOptionsData(tempOptions);
    }, []);

    const handleSelectChange = (selectedOption: any) => {
        if (selectedOption && selectedOption.value) {
            setSchoolCode(selectedOption.value);
        }
    };

    return (
        <>
            <div className="w-[66%] mx-[17%]">
                <div className="mx-[0.25%] border-black shadow-2xl border-[3px] rounded-md">
                    <center className="py-[35px]">
                        <br />
                        <h2 className="leading-normal font-semibold mx-1 text-[1xl] sm:text-2xl">
                            Academic School Performance.
                        </h2>
                        <br />
                        <br />
                        <div className="px-[10%] md:px-[30%] text-xs">
                            <AsyncSelect
                                cacheOptions
                                loadOptions={loadOptions}
                                onChange={handleSelectChange}
                                defaultOptions
                                placeholder="Select your School..."
                                className="py-[0%]"
                            />
                        </div>
                        <br />
                        <br />
                        <p className="text-[60%] text-red-600">{warning}</p>
                        <br />
                        <br />
                        <button
                            type="submit"
                            onClick={submit}
                            className="w-[100px] text-white bg-blue-700 rounded text-[85%] hover:bg-yellow-400 py-[0.15em] px-[1.2em] sm:w-[100px] sm:text-[100%]"
                        >
                            Results
                        </button>
                        <br />
                        <br />
                    </center>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ClassReportForm;
