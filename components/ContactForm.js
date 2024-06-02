import { useState } from "react";

export default function ContactUs() {

   // States for contact form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [address, setAddress] = useState('');
  const [dishes, setDishes] = useState('');
  const [price, setPrice] = useState('');
  const [extra, setExtra] = useState('');

  //   Setting button text on form submission
  const [buttonText, setButtonText] = useState("Dalintis");

  const submitData = async (event) => {
    event.preventDefault()
    const response = await fetch('/api', {
        method: 'POST',
        body: JSON.stringify({
            name, email, number, address, dishes, price, extra
    }),
        headers: {
            'Content-Type': 'application/json',
        },
    })
    const info = await response.json()
    setButtonText("Išsiųsta! Dar kartą spausti nebereikia, neužilgo susisieksime")
    console.log(info)
  }

  return (
    <
        form class="rounded-lg shadow-xl flex flex-col px-8 py-8 mt-10 p-5"
        onSubmit={submitData}
    >
      <p class="text-2xl font-bold">Nori pardavinėti maistą iš savo namų?</p>

      <label for="fullname" class="text-gray-500 font-light mt-8">Vardas<span class="text-red-700"></span></label>
      <input type="text" name="fullname" onChange={(e) => setName(e.target.value)} class="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-red-700 font-light text-gray-500" required/>

      <label for="email" class="text-gray-500 font-light mt-4">El. paštas<span class="text-red-700"></span></label>
      <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} class="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-red-700 font-light text-gray-500" required/>

      <label for="phone" class="text-gray-500 font-light mt-4">Telefono numeris<span class="text-red-700"></span></label>
      <input type="text" name="phone" onChange={(e) => setNumber(e.target.value)} class="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-red-700 font-light text-gray-500" required/>

      <label for="address" class="text-gray-500 font-light mt-4">Adresas<span class="text-red-700"></span></label>
      <input type="text" name="address" onChange={(e) => setAddress(e.target.value)} class="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-red-700 font-light text-gray-500" required/>

      <label for="dishes" class="text-gray-500 font-light mt-4">Kokį komplektą pagamintumėte, kad žmogui užtektų maisto 5 dienoms?</label>
      <textarea name="dishes" onChange={(e) => setDishes(e.target.value)} class="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-red-700 font-light text-gray-500" required></textarea>

      <label for="price" class="text-gray-500 font-light mt-4">Kiek kainuotų toks maisto krepšelis?</label>
      <textarea name="price" onChange={ (e) => setPrice(e.target.value)} class="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-red-700 font-light text-gray-500" required></textarea>
      
      <label for="extra" class="text-gray-500 font-light mt-4">Ką dar reikėtų žinoti apie jus?</label>
      <textarea name="extra" onChange={ (e) => setExtra(e.target.value)} class="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-red-700 font-light text-gray-500"></textarea>
      
      <div class="flex flex-row items-center justify-start">
        <button type="submit" class="px-10 mt-8 py-2 bg-pink-500 hover:text-pink-400 font-serif transition duration-500 ease-in-out text-gray-50 font-light rounded-md text-lg flex flex-row items-center">
          {buttonText}
        </button>
      </div>
    </form>
  )
}