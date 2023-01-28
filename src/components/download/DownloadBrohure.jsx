import React from 'react'

const DownloadBrohure = () => {
  return (
    <>
        <div className="p-24 flex flex-col items-center ">
            <div className="text-5xl font-bold  ">Fill Your Detail Below To Download Our Brochure</div>
            <hr/>
            <div className="flex flex-col">
                <form>
                    <div className="flex flex-col">
                        <label htmlFor="">First Name*</label>
                        <input type="text" className="" value="hello" />
                    </div>

                </form>
            </div>
        </div>

    </>
  )
}

export default DownloadBrohure