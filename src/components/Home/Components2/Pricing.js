import React from 'react';

const PCard = () => {
  return (
    <div style={containerStyle}>
      

      {/* Row with four side-by-side cards */}
      <h1 style={{fontStyle:"bold" , textAlign:"center", marginRight:"500px" , fontSize:"100px"}}>Pricing</h1>
      <div style={rowStyle}>
        <div style={sideBySideCardStyle}>
          <h2 style={{ color: '#7247CE' , textAlign:"center"}}>Basic Plan</h2>
          <p style={{ fontSize: '14px',textAlign:"center" }}>Price: 100/month</p>
          <p style={{ fontSize: '14px',textAlign:"center" }}>Features:
          <ul>
            <li>BMI Calculator</li>
            <li>Calorie Counter</li>
            <li>Exercise Library</li>
            <li>Progress Tracking</li>
          </ul>
          </p>
          <p style={{ fontSize: '14px',textAlign:"center" }}>Ideal for: Individuals looking for essential tools to kickstart their fitness journey.</p>
          <button style={{textAlign:"center",color:"#7247CE",fontSize:"20px", marginLeft:"50px"}}>Subscribe Now</button>
        </div>
        <div style={sideBySideCardStyle}>
          <h2 style={{ color: '#7247CE' , textAlign:"center"}}>Premium Plan</h2>
          <p style={{ fontSize: '14px',textAlign:"center" }}>Price: 200/month</p>
          <p style={{ fontSize: '14px',textAlign:"center" }}>Features:
          <ul>
            <li>BMI Calculator</li>
            <li>Calorie Counter</li>
            <li>Exercise Library</li>
            <li>Progress Tracking</li>
          </ul>
          </p>
          <p style={{ fontSize: '14px',textAlign:"center" }}>Users looking for advanced features, mobile access, and personalized support to reach their highest fitness potential.</p>
          <button style={{textAlign:"center",color:"#7247CE",fontSize:"20px", marginLeft:"50px"}}>Subscribe Now</button>
        </div>
        <div style={sideBySideCardStyle}>
          <h2 style={{ color: '#7247CE' , textAlign:"center"}}>Pro Plan</h2>
          <p style={{ fontSize: '14px',textAlign:"center" }}>Price: 300/month</p>
          <p style={{ fontSize: '14px',textAlign:"center" }}>Features:
          <ul>
            <li>BMI Calculator</li>
            <li>Calorie Counter</li>
            <li>Exercise Library</li>
            <li>Progress Tracking</li>
          </ul>
          </p>
          <p style={{ fontSize: '14px',textAlign:"center" }}>Those seeking a complete solution to track nutrition, plan workouts, and achieve their fitness goals effectively.</p>
          <button style={{textAlign:"center",color:"#7247CE",fontSize:"20px", marginLeft:"50px"}}>Subscribe Now</button>
        </div>
        
      </div>

      
    </div>
  );
}

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',

};

const rowStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  marginBottom: '20px',
};

const sideBySideCardStyle = {
  width: '200px',
  border: '1px solid #ccc',
  borderRadius: '8px',
  padding: '20px',
  margin: '10px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};

const columnStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(1, 1fr)', // 1 column
  gap: '20px',
};

const verticalCardStyle = {
  width: '200px',
  border: '1px solid #ccc',
  borderRadius: '8px',
  padding: '20px',
  margin: '10px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};

export default PCard;