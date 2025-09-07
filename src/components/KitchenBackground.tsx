import React from "react" ;

function KitchenBackground() {
    const icons = ["🍴", "🥄", "🍳", "🍲", "🥘", "🥗", "🧂"];
    
    return (
      <div className="kitchen-icons">
        {icons.map((icon, index) => (
          <span
            key={index}
            style={{
              left:` ${Math.random() * 100}%`,
              animationDuration:` ${10 + Math.random() * 20}s`,
              animationDelay:` ${Math.random() * 10}s`
            }}
          >
            {icon}
          </span>
        ))}
      </div>
    );
  }
  
  export default KitchenBackground;