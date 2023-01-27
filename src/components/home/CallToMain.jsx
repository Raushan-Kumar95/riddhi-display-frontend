import React from 'react'

const CallToMain = () => {
    return (
        <section className='flex gap-4 md:px-16 px-4 py-8 bg-red-700 w-full justify-center uppercase text-white'>
            <div className='flex gap-8 md:flex-row flex-col justify-center items-center'>
                <div class="flex gap-4 items-center border px-4 py-4 pr-20">
                    <div class="icon-l"><i class="fa fa-phone text-3xl" aria-hidden="true"></i></div>
                    <div class="text">
                        <div class="label">Have a question? Call us Now</div>
                        <a className='font-bold' href="tel:+91 9825072799">+91 9825072799</a>
                    </div>
                </div>
                <div class="flex gap-4 items-center border px-4 py-4 pr-16">
                    <div class="icon-l"><i class="fa fa-envelope-o  text-3xl" aria-hidden="true"></i></div>
                    <div class="text">
                        <div class="label">Need Support? Drop us an email</div>
                        <a  className='font-bold' href="mailto:info@riddhidisplay.com">info@riddhidisplay.com</a></div>
                </div>
            </div>


        </section>
    )
}

export default CallToMain