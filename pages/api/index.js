

export default async function handler(req, res) {

    if (req.method === 'GET') {
        res.status(200).json(data)
    } else if (req.method === 'POST') {
try {
      const response = await fetch('https://api.postmarkapp.com/email', {
        method: 'POST',
        body: JSON.stringify({
          "From": "teo@babuska.lt",
          "To": "teo@babuska.lt",
          "Subject": "We got a new babushka",
          "TextBody": `
            Name: ${req.body.name} 
            Email: ${req.body.email} 
            Number: ${req.body.number} 
            Address: ${req.body.address}
            Dishes: ${req.body.dishes} 
            Foods: ${req.body.foods} 
            Snacks: ${req.body.snacks}`
        }),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'X-Postmark-Server-Token': '511ed4b1-0c43-46c5-b256-6b50cd14fe59',
        },
      });

      const info = await response.json();
      console.log(info);

      res.status(200).json(info);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }

    }
}