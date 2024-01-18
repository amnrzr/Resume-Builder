// Import React library
import React from "react";

// WorkEx component definition
const WorkEx = ({ userData, setUserData }) => {
    // JSX structure for the WorkEx component
    return (
        <div>
            <div className="education-form">
                <h2>Work Experience</h2>

                {/* Form for capturing work experience details */}
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="form-group">
                        {/* Input field for job title/designation */}
                        <label htmlFor="title">Designation:</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={userData.title}
                            onChange={(e) => { setUserData({ ...userData, title: e.target.value }) }}
                            required
                        />
                    </div>

                    <div className="form-group">
                        {/* Input field for company name */}
                        <label htmlFor="company">Company:</label>
                        <input
                            type="text"
                            id="company"
                            name="company"
                            value={userData.company}
                            onChange={(e) => { setUserData({ ...userData, company: e.target.value }) }}
                            required
                        />
                    </div>

                    <div className="form-group">
                        {/* Input field for responsibilities */}
                        <label htmlFor="responsibilities">Responsibilities:</label>
                        <input
                            type="text"
                            id="responsibilities"
                            name="responsibilities"
                            value={userData.responsibilities}
                            onChange={(e) => { setUserData({ ...userData, responsibilities: e.target.value }) }}
                            required
                        />
                    </div>

                    <div className="form-group">
                        {/* Input field for graduation year (this seems to be a mistake; it's commented out) */}
                        <label htmlFor="graduationYear">Graduation Year:</label>
                        <input
                            type="text"
                            id="graduationYear"
                            name="graduationYear"
                            // value={userData.graduationYear}
                            // onChange={handleChange}
                            // required
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}

// Export the WorkEx component as the default export
export default WorkEx;
