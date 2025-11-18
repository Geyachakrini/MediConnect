const doctorsData = {
  "Manipal Hospital": [
    { name: "Dr. Ananya Rao", specialization: "Cardiologist", experience: "12 years", fee: "₹700", slots: ["10:00 AM", "2:00 PM", "5:00 PM"] },
    { name: "Dr. Rohan Sharma", specialization: "Neurologist", experience: "9 years", fee: "₹900", slots: ["11:00 AM", "4:00 PM"] },
    { name: "Dr. Priya Kamat", specialization: "Dermatologist", experience: "8 years", fee: "₹650", slots: ["12:00 PM", "6:00 PM"] },
    { name: "Dr. Harish Nair", specialization: "General Surgeon", experience: "14 years", fee: "₹1000", slots: ["9:00 AM", "3:00 PM"] },
    { name: "Dr. Megha Desai", specialization: "Endocrinologist", experience: "7 years", fee: "₹750", slots: ["1:00 PM", "4:30 PM"] },
    { name: "Dr. Kiran Venkatesh", specialization: "Orthopedic Surgeon", experience: "11 years", fee: "₹850", slots: ["2:00 PM", "7:00 PM"] }
  ],

  "Fortis Hospital": [
    { name: "Dr. Kavya Menon", specialization: "Dermatologist", experience: "7 years", fee: "₹600", slots: ["3:00 PM", "6:00 PM"] },
    { name: "Dr. Arjun Pillai", specialization: "Orthopedic Surgeon", experience: "10 years", fee: "₹850", slots: ["12:00 PM", "5:00 PM"] },
    { name: "Dr. Vidya Iyer", specialization: "Gynecologist", experience: "15 years", fee: "₹900", slots: ["10:00 AM", "4:00 PM"] },
    { name: "Dr. Nikhil Rao", specialization: "Pulmonologist", experience: "9 years", fee: "₹700", slots: ["11:30 AM", "3:30 PM"] },
    { name: "Dr. Sneha Gopal", specialization: "Ophthalmologist", experience: "6 years", fee: "₹500", slots: ["9:30 AM", "1:30 PM"] },
    { name: "Dr. Sanjay Kumar", specialization: "Cardiothoracic Surgeon", experience: "17 years", fee: "₹1500", slots: ["2:00 PM", "7:00 PM"] }
  ],

  "Apollo Hospital": [
    { name: "Dr. Meera Iyer", specialization: "Pediatrician", experience: "8 years", fee: "₹500", slots: ["9:00 AM", "1:00 PM"] },
    { name: "Dr. Varun Shetty", specialization: "Cardiologist", experience: "13 years", fee: "₹900", slots: ["10:00 AM", "6:00 PM"] },
    { name: "Dr. Aishwarya Gupta", specialization: "Neurologist", experience: "10 years", fee: "₹850", slots: ["11:00 AM", "4:00 PM"] },
    { name: "Dr. Siddharth Menon", specialization: "General Physician", experience: "6 years", fee: "₹400", slots: ["3:00 PM", "7:00 PM"] },
    { name: "Dr. Neha Kulkarni", specialization: "ENT Specialist", experience: "5 years", fee: "₹450", slots: ["1:00 PM", "5:00 PM"] },
    { name: "Dr. Ajay Patil", specialization: "Urologist", experience: "11 years", fee: "₹950", slots: ["12:30 PM", "6:30 PM"] }
  ],

  "Sakra World Hospital": [
    { name: "Dr. Shalini Rao", specialization: "Neurologist", experience: "9 years", fee: "₹750", slots: ["10:00 AM", "3:00 PM"] },
    { name: "Dr. Gaurav Shetty", specialization: "Cardiologist", experience: "12 years", fee: "₹900", slots: ["11:00 AM", "5:00 PM"] },
    { name: "Dr. Maya Krishnan", specialization: "Gynecologist", experience: "14 years", fee: "₹800", slots: ["9:30 AM", "4:30 PM"] },
    { name: "Dr. Jayanth V", specialization: "Orthopedic Surgeon", experience: "10 years", fee: "₹850", slots: ["2:00 PM", "7:00 PM"] },
    { name: "Dr. Anil Mehta", specialization: "Dermatologist", experience: "7 years", fee: "₹550", slots: ["1:00 PM", "5:30 PM"] },
    { name: "Dr. Prerna Singh", specialization: "Endocrinologist", experience: "8 years", fee: "₹700", slots: ["12:00 PM", "6:00 PM"] }
  ],

  "Aster CMI Hospital": [
    { name: "Dr. Shruti Narain", specialization: "ENT Specialist", experience: "6 years", fee: "₹450", slots: ["1:00 PM", "4:30 PM"] },
    { name: "Dr. Mohan Krishna", specialization: "Cardiologist", experience: "16 years", fee: "₹1100", slots: ["9:00 AM", "3:00 PM"] },
    { name: "Dr. Lavanya Nair", specialization: "Gynecologist", experience: "11 years", fee: "₹800", slots: ["10:30 AM", "5:00 PM"] },
    { name: "Dr. Vivek Reddy", specialization: "Neurologist", experience: "13 years", fee: "₹950", slots: ["12:30 PM", "6:30 PM"] },
    { name: "Dr. Nisha Varma", specialization: "Dermatologist", experience: "5 years", fee: "₹500", slots: ["11:00 AM", "4:15 PM"] },
    { name: "Dr. Suresh Pai", specialization: "Orthopedic Surgeon", experience: "18 years", fee: "₹1200", slots: ["2:30 PM", "7:30 PM"] }
  ],

  "Columbia Asia Hospital": [
    { name: "Dr. Ramya Hegde", specialization: "Pediatrician", experience: "9 years", fee: "₹550", slots: ["9:30 AM", "1:30 PM"] },
    { name: "Dr. Sudhir Prasad", specialization: "Physician", experience: "14 years", fee: "₹600", slots: ["10:00 AM", "5:00 PM"] },
    { name: "Dr. Anoop Menon", specialization: "Cardiologist", experience: "10 years", fee: "₹900", slots: ["11:00 AM", "3:00 PM"] },
    { name: "Dr. Shaila N", specialization: "Dermatologist", experience: "7 years", fee: "₹450", slots: ["12:30 PM", "4:30 PM"] },
    { name: "Dr. Kruthika Rao", specialization: "ENT Specialist", experience: "6 years", fee: "₹400", slots: ["2:00 PM", "6:00 PM"] },
    { name: "Dr. Antony Mathew", specialization: "Neurologist", experience: "15 years", fee: "₹850", slots: ["1:00 PM", "7:00 PM"] }
  ],

  "Narayana Health": [
    { name: "Dr. Puneet Kumar", specialization: "Cardiothoracic Surgeon", experience: "18 years", fee: "₹1500", slots: ["10:00 AM", "4:00 PM"] },
    { name: "Dr. Nandini Ramesh", specialization: "Gynecologist", experience: "12 years", fee: "₹800", slots: ["9:00 AM", "6:00 PM"] },
    { name: "Dr. Akshay Raj", specialization: "General Surgeon", experience: "10 years", fee: "₹900", slots: ["1:00 PM", "5:30 PM"] },
    { name: "Dr. Ritu Singh", specialization: "Endocrinologist", experience: "8 years", fee: "₹600", slots: ["2:30 PM", "7:00 PM"] },
    { name: "Dr. Deepak V", specialization: "Neurologist", experience: "13 years", fee: "₹850", slots: ["3:00 PM", "7:30 PM"] },
    { name: "Dr. Sahana Rao", specialization: "Pediatrician", experience: "6 years", fee: "₹500", slots: ["12:00 PM", "4:00 PM"] }
  ],

  "Vikram Hospital": [
    { name: "Dr. Gayathri Menon", specialization: "Neurologist", experience: "9 years", fee: "₹750", slots: ["10:30 AM", "4:00 PM"] },
    { name: "Dr. Rajeev Shekar", specialization: "Cardiologist", experience: "11 years", fee: "₹950", slots: ["11:30 AM", "6:00 PM"] },
    { name: "Dr. Shwetha Pai", specialization: "Gynecologist", experience: "10 years", fee: "₹800", slots: ["9:30 AM", "5:30 PM"] },
    { name: "Dr. Manish Kulkarni", specialization: "Dermatologist", experience: "7 years", fee: "₹500", slots: ["3:00 PM", "7:00 PM"] },
    { name: "Dr. Lakshmi R", specialization: "ENT Specialist", experience: "8 years", fee: "₹450", slots: ["12:00 PM", "6:00 PM"] },
    { name: "Dr. Naveen S", specialization: "General Physician", experience: "6 years", fee: "₹400", slots: ["1:00 PM", "4:00 PM"] }
  ],

  "Rainbow Children’s Hospital": [
    { name: "Dr. Roshni Rao", specialization: "Pediatrician", experience: "10 years", fee: "₹600", slots: ["10:00 AM", "3:00 PM"] },
    { name: "Dr. Madhav Shetty", specialization: "Neonatologist", experience: "14 years", fee: "₹1100", slots: ["11:00 AM", "5:00 PM"] },
    { name: "Dr. Divya S", specialization: "Pediatric ENT", experience: "6 years", fee: "₹550", slots: ["12:00 PM", "4:30 PM"] },
    { name: "Dr. Hari Prakash", specialization: "Pediatric Cardiologist", experience: "8 years", fee: "₹950", slots: ["2:00 PM", "6:00 PM"] },
    { name: "Dr. Kavitha Varma", specialization: "Pediatric Neurologist", experience: "9 years", fee: "₹850", slots: ["9:30 AM", "3:30 PM"] },
    { name: "Dr. Arvind N", specialization: "General Pediatrician", experience: "7 years", fee: "₹500", slots: ["1:00 PM", "5:00 PM"] }
  ],

  "Sagar Hospitals": [
    { name: "Dr. Anupama Rao", specialization: "Gynecologist", experience: "11 years", fee: "₹700", slots: ["11:00 AM", "4:00 PM"] },
    { name: "Dr. Rakesh Kumar", specialization: "Cardiologist", experience: "15 years", fee: "₹1100", slots: ["10:00 AM", "6:00 PM"] },
    { name: "Dr. Smita Shah", specialization: "Dermatologist", experience: "6 years", fee: "₹450", slots: ["1:00 PM", "5:00 PM"] },
    { name: "Dr. Venu Madhav", specialization: "General Surgeon", experience: "13 years", fee: "₹900", slots: ["12:00 PM", "7:00 PM"] },
    { name: "Dr. Aditi Chandran", specialization: "Pediatrician", experience: "8 years", fee: "₹500", slots: ["9:00 AM", "2:00 PM"] },
    { name: "Dr. Arjun Nair", specialization: "Orthopedic Surgeon", experience: "10 years", fee: "₹850", slots: ["3:00 PM", "8:00 PM"] }
  ]
};

export default doctorsData;
