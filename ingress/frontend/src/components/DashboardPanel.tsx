import React, { useState } from 'react';
import { 
  Bell, 
  Settings, 
  User, 
  ChevronLeft, 
  ChevronRight, 
  LayoutDashboard, 
  Database, 
  Box, 
  FileText, 
  BarChart2, 
  HelpCircle,
} from 'lucide-react';

import '../DashboardPanel.css';

interface SidebarItemProps {
  icon: React.ReactNode;
  text: string;
  isOpen: boolean;
  isActive?: boolean;
}

const DashboardPanel: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
  return (
    <div className="dashboard-container">
      {/* Top Navigation Bar */}
      <header className="dashboard-header">
        <div className="header-container">
          {/* Left side - Logo */}
          <div className="flex items-center">
            <div className="logo-container">
              <div className="logo-icon">
                <BarChart2 size={22} />
              </div>
              <span className="logo-text">Blazecore IoT</span>
            </div>
          </div>
          
          {/* Right side - User info, notifications, settings */}
          <div className="user-controls">
            <button className="control-button">
              <Bell size={18} />
            </button>
            <button className="control-button">
              <Settings size={18} />
            </button>
            <div className="user-profile">
              <div className="user-info">
                <span className="user-name">Admin User</span>
                <span className="user-role">Administrator</span>
              </div>
              <div className="user-avatar">
                <User size={18} />
              </div>
            </div>
          </div>
        </div>
      </header>
      
      {/* Main Content Area with Sidebar */}
      <div className="content-container">
        {/* Sidebar */}
        <aside className={`sidebar ${sidebarOpen ? 'expanded' : 'collapsed'}`}>
          {/* Sidebar Toggle Button */}
          <div className="sidebar-toggle">
            <button 
              onClick={toggleSidebar}
              className="toggle-button"
            >
              {sidebarOpen ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
            </button>
          </div>
          
          {/* Sidebar Navigation Items */}
          <nav className="nav-container">
            <SidebarItem 
              icon={<LayoutDashboard size={18} />} 
              text="Experimentos" 
              isOpen={sidebarOpen} 
              isActive={true}
            />
            <SidebarItem 
              icon={<Database size={18} />} 
              text="Entidades" 
              isOpen={sidebarOpen} 
            />
            <SidebarItem 
              icon={<Box size={18} />} 
              text="Recursos" 
              isOpen={sidebarOpen} 
            />
            <SidebarItem 
              icon={<FileText size={18} />} 
              text="Reportes" 
              isOpen={sidebarOpen} 
            />
            <div className="nav-divider"></div>
            <SidebarItem 
              icon={<Settings size={18} />} 
              text="Configuraciones" 
              isOpen={sidebarOpen} 
            />
            <SidebarItem 
              icon={<HelpCircle size={18} />} 
              text="Ayuda" 
              isOpen={sidebarOpen} 
            />
          </nav>
        </aside>
        
        {/* Main Content */}
        <main className="main-content">
          <div className="content-card">
            <h1 className="card-title">Welcome to Blazecore</h1>
            <p className="card-text">
              Select an option from the sidebar to get started. You can manage dashboards, 
              entities, resources, and more from the navigation panel.
		      with blaze at its core 
            </p>
            <div className="content-placeholder">
              <p className="placeholder-text">Main dashboard content will appear here</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, text, isOpen, isActive = false }) => {
  return (
    <div className={`nav-item ${isActive ? 'active' : ''}`}>
      <div className="nav-icon">{icon}</div>
      {isOpen && <span className="nav-text">{text}</span>}
    </div>
  );
};

export default DashboardPanel;
