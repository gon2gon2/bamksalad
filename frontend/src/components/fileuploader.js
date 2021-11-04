import axios from 'axios'
import { useState } from 'react'

function fileUploader() {
    const [file, setFile] = useState('')

    const handleFile = (e) => {
        console.log(e.target.files)
        setFile(e.target.files)
        let data = new FormData();
        data.append('file', e.target.files)
        data.values()
        const options = {
            onUploadProgress: (progressEvent) => {
                const { loaded, total } = progressEvent
                let percent = Math.floor(loaded * 100 / total)
                console.log(`${loaded}kb of ${total}kb | ${percent} %`)
            },
        }
        axios.
            post(
                'https://run.mocky.io/v3/d5a0d30f-143a-41ae-bccb-41dfe9402743',
                data,
                options
            )
            .then(res => {
                console.log(res)
            })

    }
}

return (

    <div className='App'>
        <input type='file' accept='.csv, .xlsx' multiple
            onChange={handleFile}></input>
    </div>


)
