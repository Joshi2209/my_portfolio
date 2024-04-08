import React from "react";
import { Link } from "react-router-dom";

function Education() {
  return (
    <>
      <div className="flex justify-center">
        <div className="">
          <table className="table-auto border-4 m-10 ">
            <thead>
              <tr className="border p-2">
                <th className="p-2">Cource</th>
                <th>School/College</th>
                <th>Passing out year</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody className="border-4 p-2">
              <tr>
                <td>SSLC</td>
                <td>Roteryclub School Kalburgi</td>
                <td className="p-2">2017</td>
                <td>80.8</td>
              </tr>
              <tr>
                <td className="pr-2">Diploma</td>
                <td>NVs pollytechnic Kalburgi</td>
                <td className="p-2">2020</td>
                <td>75%</td>
              </tr>
              <tr>
                <td className="pr-2"> Bachelor of Engineering.</td>
                <td>PDA colleage of Engineering Kalburgi</td>
                <td className="p-2">2020</td>
                <td>7.04</td>
              </tr>
            </tbody>
          </table>
          <div className="flex justify-center">
            <Link to="/">
              <button className="p-2 border-2 bg-[#f851df]">Home</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;
