

const Question = () => {
    return (
        <div className="my-12 md:mt-32 mx-6">
            <p className="border-2 px-6 py-2 font-semibold w-20 rounded-3xl">Faq</p>
            <h2 className="text-[40px] font-semibold my-6">Frequntly Asked Question</h2>
            <div className="join join-vertical w-full space-y-4">
                <div className="collapse collapse-arrow join-item shadow-md">
                    <input type="radio" name="my-accordion-4" defaultChecked />
                    <div className="collapse-title text-xl font-medium bg-[#FFFFF5]"> What are your office hours?</div>
                    <div className="collapse-content">
                        <p className="border-t">Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item shadow-md">
                    <input type="radio" name="my-accordion-4" defaultChecked />
                    <div className="collapse-title text-xl font-medium bg-[#FFFFF5]"> How can I schedule an appointment?</div>
                    <div className="collapse-content">
                        <p className="border-t">Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item shadow-md">
                    <input type="radio" name="my-accordion-4" defaultChecked />
                    <div className="collapse-title text-xl font-medium bg-[#FFFFF5]">Do you accept insurance?</div>
                    <div className="collapse-content">
                        <p className="border-t">Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item shadow-md">
                    <input type="radio" name="my-accordion-4" defaultChecked />
                    <div className="collapse-title text-xl font-medium bg-[#FFFFF5]"> What should I bring to my appointment?</div>
                    <div className="collapse-content">
                        <p className="border-t">Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item shadow-md">
                    <input type="radio" name="my-accordion-4" defaultChecked />
                    <div className="collapse-title text-xl font-medium bg-[#FFFFF5]"> Do you offer telemedicine appointments?</div>
                    <div className="collapse-content">
                        <p className="border-t">Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Question;