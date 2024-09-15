import React, { useState } from 'react'

const Decode = () => {
    const [image, setImage] = useState(null)
    const [text, setText] = useState(null)
    const [error, setError] = useState(null);
    const [modal, setModal] = useState(false)
    const [filename, setFilename] = useState('')
    const [uploaded, setUploaded] = useState(false)
    const [loading, setLoading] = useState(false);
    const [showDecode, setShowDecode] = useState(true);

    const handleImageChange = (image) => {
        setError(null);
        if (!image.name.match(/\.(bmp|png|gif)$/)) {
            const error = "Wrong File Type! Choose a PNG or BMP file only";
            setError(error);
            setModal(true);
            setLoading(false)
            return;
        }

        if (image.size > 5000000) {
            const error = "File size over limit! Choose a file below 5MB";
            setLoading(false)
            setError(error);
            setModal(true);
            return;
        }
        setImage(image);
        setError(null);
        setFilename(image.name)
        setUploaded(true)
    }

    const onClose = () => {
        setModal(false);
        setError(null);
        setLoading(false)
    }

    const handlesubmit = async (e) => {
        e.preventDefault()
        setShowDecode(false)

        if (!image) {
            const error = "Please choose an image file to encode!";
            setError(error);
            setLoading(true)
            setShowDecode(true)
            setModal(true);
            return;
        }
        setLoading(true)
        const formData = new FormData()
        formData.append('image', image)

        const response = await fetch('https://stegserver-ebmc9j0kk-a8h1kms-projects.vercel.app/decode-image', {
            method: 'POST',
            body: formData,
        })

        const data = await response.json()
        setText(data.decoded_text)
        setLoading(false)
        setShowDecode(true)
    }

    return (
        <div>
            <form action="" onSubmit={handlesubmit}>
                <div className='flex flex-col justify-center items-center'>
                    <div className="flex items-center justify-center w-2/4 pt-12">
                        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-200">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                {uploaded && (<div className='flex flex-col items-center'>
                                    <div className='flex flex-col items-center justify-center'>
                                        <svg className='' width="512px" height="60px" viewBox="-6.4 -6.4 76.80 76.80" xmlns="http://www.w3.org/2000/svg" fill="#6b6b6b" stroke="#6b6b6b" transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill-rule="evenodd" clip-rule="evenodd"> <path d="M5.125.042c-2.801 0-5.072 2.273-5.072 5.074v53.841c0 2.803 2.271 5.073 5.072 5.073h45.775c2.801 0 5.074-2.271 5.074-5.073v-38.604l-18.904-20.311h-31.945z" fill="#47d1ac"></path> <path d="M55.977 20.352v1h-12.799s-6.312-1.26-6.129-6.707c0 0 .208 5.707 6.004 5.707h12.924z" fill="#5bd2ac"></path> <path d="M37.074 0v14.561c0 1.656 1.104 5.791 6.104 5.791h12.799l-18.903-20.352z" opacity=".5" fill="#ffffff"></path> </g> <path d="M10.119 53.739v-20.904h20.906v20.904h-20.906zm18.799-18.843h-16.691v12.6h16.691v-12.6zm-9.583 8.384l3.909-5.256 1.207 2.123 1.395-.434.984 5.631h-13.082l3.496-3.32 2.091 1.256zm-3.856-3.64c-.91 0-1.649-.688-1.649-1.538 0-.849.739-1.538 1.649-1.538.912 0 1.65.689 1.65 1.538 0 .85-.738 1.538-1.65 1.538z" fill-rule="evenodd" clip-rule="evenodd" fill="#ffffff"></path> </g></svg>
                                        <br />
                                        <span className='text-black font-mono'>{filename}</span>
                                    </div>
                                </div>)}
                                {!uploaded && (<div className='flex flex-col items-center'>
                                    <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                    </svg>
                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">PNG or BMP (MAX. 5MB)</p>
                                </div>)}
                            </div>
                            <input accept=".png,.bmp" onChange={(event) => { handleImageChange(event.target.files[0]) }} id="dropzone-file" type="file" className="hidden" />
                        </label>
                    </div>
                    {showDecode && (<button className='bg-gray-600 hover:bg-gray-800 transition-all p-4 mx-72 border rounded-xl mt-8 mb-8' type="submit">Decode</button>)}
                    {loading && <div className='my-8'>
                        <svg className="animate-spin h-16 w-16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                            </path>
                        </svg>
                    </div>}
                </div>
            </form>
            {error && modal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-all">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
                        <h2 className="text-lg font-semibold mb-4">Error</h2>
                        <p className="text-black mb-4">{error}</p>
                        <button
                            onClick={onClose}
                            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            {text && (
                <div className='flex flex-col items-center justify-center mt-12 p-20 bg-black'>
                    <h3 className='font-mono font-semibold text-lg'>Decoded Text: {text}</h3>
                </div>
            )}
        </div>
    )
}

export default Decode