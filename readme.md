Hospital API
This is an API for a hospital that provides functionalities for doctors, patients, and reports related to Covid-19.

Features
Register doctors: Allows doctors to register by providing their name, mobile number, and password.
Login for doctors: Enables doctors to log in to the system.
Register patients: Allows the registration of patients by providing their name, address, and mobile number.
Create Covid-19 test result: Enables doctors to create Covid-19 test results for patients. This includes specifying the doctor, patient, status, and date of the report.
Retrieve a list of all reports of a patient: Provides the ability to fetch all the reports associated with a particular 



patient.
Retrieve a list of all reports with a specified status: Allows the retrieval of all reports that have a specified status.
Database Models


Doctor: Represents the doctor entity in the database. It includes fields such as name, mobile number, and password.
Patient: Represents the patient entity in the database. It includes fields such as name, address, mobile number, and an array of reports associated with the patient.
Report: Represents the report entity in the database. It includes fields such as the doctor who created the report, the patient associated with the report, the status of the report, and the date of the report.


Folder Structure
config: Contains configuration files for the application.
moongose.js: Handles the database connection using Mongoose.
passport-jwt-strategy.js: Configures the passport-jwt strategy for authentication.
controllers: Contains controllers responsible for handling different functionalities.
doctor_controller.js: Handles functionalities related to doctors.
patient_controller.js: Handles functionalities related to patients.
report_controller.js: Handles functionalities related to reports.
models: Contains database models for different entities.
doctor.js: Defines the Doctor model.
patient.js: Defines the Patient model.
report.js: Defines the Report model.
routes: Contains different routes for the API.
api/v1: Versioned routes for the API.
doctors.js: Defines routes related to doctors.
patients.js: Defines routes related to patients.
reports.js: Defines routes related to reports.
index.js: The main entry point of the application.
package.json: Contains metadata and dependencies for the project.
package-lock.json: Lock file for package versions.


How to Start
To start the application, run the following command:


npm start
This will start the server and make the API endpoints available for use.

Note: Before starting the application, make sure to install the required dependencies using npm install.




