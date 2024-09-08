import {useState} from 'react';
import L from "./L";
import J from "./J";
import C from "./c";
import B from './B';




export default function A() {
  // hook veriables
  const [nh1,setNh1] = useState("What the agency says");
  const [np1,setNp1] = useState("CERT-In is a national cybersecurity agency working under the Ministry of Electronics and Information Technology.");
  const [np2,setNp2] = useState("It says that “Multiple vulnerabilities have been reported in");

  return (
    <>
    <h1>Hello A Component</h1>
    <h2>{nh1}</h2>
    <L />
    <J parg1 = {np1}/>
    <C np2 = {np2}/>
    <B name = {nh1}/>
    </>
  )
}
