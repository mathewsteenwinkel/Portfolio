import React, { useState } from 'react';
import '../src/css/Tabs.css';

export default function Tabs({ title, tabs }) {
  const [activeTab, setActiveTab] = useState(0); // State for the active tab

  const activateTab = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="tabview">
      {title && <h4 className="title">{title}</h4>}
      <div className="body-content">
        {tabs && tabs.length > 0 ? ( 
          <div>
            <div className="tabs">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  className={index === activeTab ? 'active-tab' : 'tabs'}
                  onClick={() => activateTab(index)}
                >
                  {tab.name}
                </button>
              ))}
            </div>
            <div className="content">
              {tabs[activeTab].content
                .split(',') 
                .map((skill, idx) => (
                  <div 
                  key={idx} 
                  className="skill">
                    {skill.trim()}
                  </div>
                ))}
            </div>
          </div>
        ) : (
          <div>No tabs available</div>
        )}
      </div>
    </div>
  );
}
