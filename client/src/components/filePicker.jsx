import React from 'react'
import CusButtn from './cusButtn'

const FilePicker = ({ file, setFile, readFile}) => {
    return (
        <div className='filepicker-container'>
            <div className="flex-1 flex flex-col">
                <input id='file-upload' 
                    type='file' 
                    accept='image/*'
                    onChange={(e) => setFile(e.target.files[0])}
                />
                <label htmlFor="file-upload" className='filepicker-label'>
                    Upload File
                </label>
                <p>
                    {file === '' ? 'No File Uploaded' : file.Name}
                </p>
                </div>
                <div className="mt-4 flex flex-wrap gap-3">
                    <CusButtn
                        type='outline'
                        title='Logo'
                        handleClick={() => readFile('logo')}
                        customStyles='text-xs'
                    />
                    <CusButtn
                        type='filled'
                        title='Full'
                        handleClick={() => readFile('full')}
                        customStyles='text-xs'
                    />
                </div>
        </div>
    )
}

export default FilePicker