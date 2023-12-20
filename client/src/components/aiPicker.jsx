import React from 'react'

import CusButtn from './cusButtn'

const AiPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
    return (
        <div className='aipicker-container'>
            <textarea 
                placeholder='Enter your own Prompt..'
                rows={4}
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className='aipicker-textarea'
            />
            <div className='flex flex-wrap gap-3'>
                {generatingImg ? (
                    <CusButtn
                        type="outline"
                        title="Asking AI"
                        customStyles="text-xs"
                    />

                ) : (
                    <>
                        <CusButtn
                            type="outline"
                            title="AI Logo"
                            handleClick={() => handleSubmit('logo')}
                            customStyles="text-xs"
                        />
                        
                        <CusButtn
                            type="filled"
                            title="AI Full"
                            handleClick={() => handleSubmit('full')}
                            customStyles="text-xs"
                        />
                    </>
                )
            }
            </div>
        </div>
    )
}

export default AiPicker