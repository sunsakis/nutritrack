import { useState } from "react";

export default function ContactUs() {

   // States for contact form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [address, setAddress] = useState('');
  const [dishes, setDishes] = useState('');
  const [foods, setProducts] = useState('');
  const [snacks, setSnacks] = useState('');
  //   Form validation state
  const [errors, setErrors] = useState({});

  //   Setting button text on form submission
  const [buttonText, setButtonText] = useState("Dalintis");

  // Setting success or failure messages states
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const submitData = async (event) => {
    event.preventDefault()
    const response = await fetch('/api', {
        method: 'POST',
        body: JSON.stringify({
            name, email, number, address, dishes, foods, snacks
    }),
        headers: {
            'Content-Type': 'application/json',
        },
    })
    const info = await response.json()
    console.log(info)
  }

  return (
    <
        form class="rounded-lg shadow-xl flex flex-col px-8 py-8 mt-10"
        onSubmit={submitData}
    >
      <p class="text-2xl font-bold">Nori pardavinėti maistą iš savo namų?</p>

      <label for="fullname" class="text-gray-500 font-light mt-8">Vardas<span class="text-red-700">*</span></label>
      <input type="text" name="fullname" onChange={(e) => setName(e.target.value)} class="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-red-700 font-light text-gray-500" required/>

      <label for="email" class="text-gray-500 font-light mt-4">El. paštas<span class="text-red-700">*</span></label>
      <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} class="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-red-700 font-light text-gray-500" required/>

      <label for="phone" class="text-gray-500 font-light mt-4">Telefono numeris<span class="text-red-700">*</span></label>
      <input type="number" name="phone" onChange={(e) => setNumber(e.target.value)} class="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-red-700 font-light text-gray-500" required/>

      <label for="address" class="text-gray-500 font-light mt-4">Adresas<span class="text-red-700">*</span></label>
      <input type="text" name="address" onChange={(e) => setAddress(e.target.value)} class="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-red-700 font-light text-gray-500" required/>

      <label for="dishes" class="text-gray-500 font-light mt-4">Firminiai patiekalai</label>
      <textarea name="dishes" onChange={(e) => setDishes(e.target.value)} class="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-red-700 font-light text-gray-500"></textarea>

      <label for="products" class="text-gray-500 font-light mt-4">Kokybiški gaminiai</label>
      <textarea name="products" onChange={ (e) => setProducts(e.target.value)} class="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-red-700 font-light text-gray-500"></textarea>
      
      <label for="snacks" class="text-gray-500 font-light mt-4">Autentiški užkandžiai</label>
      <textarea name="snacks" onChange={ (e) => setSnacks(e.target.value)} class="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-red-700 font-light text-gray-500"></textarea>
      
      <div class="flex flex-row items-center justify-start">
        <button type="submit" class="px-10 mt-8 py-2 bg-red-700 text-gray-50 font-light rounded-md text-lg flex flex-row items-center">
          {buttonText}
        </button>
      </div>
    </form>
  )
}

// EXTRA CODE

//         const client = new ServerClient(process.env.POSTMARK_SERVER_TOKEN);
//         await client.sendEmail({
//             "From": "zenona@abuska.lt",
//             "To": "zenona@babuska.lt",
//             "Subject": "Labuka",
//             "TextBody": "a veik?"
//         });
//         console.log('Email sent');
//     } catch (error) {
//         console.error('Error:', error);
//     }

      

//     //   const { error } = await res.json();
//     //   if (error) {
//     //     console.log(error);
//     //     setShowSuccessMessage(false);
//     //     setShowFailureMessage(true);
//     //     setButtonText("Siųsti");
//     //     return;
//     //   }
//     //   setShowSuccessMessage(true);
//     //   setShowFailureMessage(false);
//     //   setButtonText("Siųsti");
//     //}

//   };


//   async function sendEmail() {
    // const emailData ={
    //     From: from,
    //     To: to,
    //     Subject: subject,
    //     Name: name,
    //     Email: email,
    //     MainDishes: mainDishes,
    //     Foods: foods,
    //     Snacks: snacks,
    // };
//     try {
//         await fetch('/api/basic-email', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ name })
//         }
//         )
        
//     } catch (error) {
//         console.error('Error:', error);
//     }
//   }

  // Validation check method
//   const handleValidation = () => {
//     let tempErrors = {};
//     let isValid = true;

//     if (name.length <= 0) {
//       tempErrors["fullname"] = true;
//       isValid = false;
//     }
//     if (email.length <= 0) {
//       tempErrors["email"] = true;
//       isValid = false;
//     }

//     setErrors({ ...tempErrors });
//     console.log("errors", errors);
//     return isValid;
//   };

  //   Handling form submit

//   const handleSubmit = async (e) => {
//     // e.preventDefault();

//     //let isValidForm = handleValidation();

//     //if (isValidForm) {
//     try {