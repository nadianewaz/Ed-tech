'use client';
export default function PurchaseButton() {  
    const handleSubmit = (e) => {
        
        console.log('saving');
        fetch('http://localhost:5000/purchase', {
          method: 'post',
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify({
           "course_id": 200,
           "user_id": 200
          }),
         });
      };

      return (<div>
      <button onClick={handleSubmit}>Purchase</button>
    </div>);
}