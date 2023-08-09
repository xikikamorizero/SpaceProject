'use client'
import {useState} from 'react'
import { useRouter, useSearchParams } from "next/navigation"
import axios from 'axios';
export default function HomeComponents(){
    let router = useRouter();
    let path = useSearchParams()
    const search = path.get('123')

    const [state, setState] = useState([])

    function Api(){
        axios.get('https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=DEMO_KEY').then((response)=>{
            console.log(response)
            // setState()
        }
        )
    }
  

return(
    <div>
        Home
        <button onClick={()=>{
            Api()
        }}>ODD</button>
        <div>
            {state.map((a:any, i)=><div key={i}>{a}</div>)}
        </div>
    </div>
)
}