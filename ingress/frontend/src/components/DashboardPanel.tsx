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
  Play,
  Pause,
  Delete,
  Plus,
  Search
} from 'lucide-react';

import './DashboardPanel.css';

// Main Dashboard Component
const DashboardPanel = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState('experiments');
  const [experiments, setExperiments] = useState([
    { id: 1, name: 'Temperature Monitoring', status: 'active', devices: 5, lastUpdated: '2025-05-01' },
    { id: 2, name: 'Humidity Control', status: 'inactive', devices: 3, lastUpdated: '2025-04-28' },
    { id: 3, name: 'Light Intensity', status: 'active', devices: 8, lastUpdated: '2025-05-05' },
    { id: 4, name: 'Motion Detection', status: 'inactive', devices: 4, lastUpdated: '2025-04-22' }
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const toggleExperimentStatus = (id) => {
    setExperiments(experiments.map(exp => 
      exp.id === id ? {...exp, status: exp.status === 'active' ? 'inactive' : 'active'} : exp
    ));
  };

  const deleteExperiment = (id) => {
    setExperiments(experiments.filter(exp => exp.id !== id));
  };

  const addNewExperiment = () => {
    const newId = Math.max(...experiments.map(exp => exp.id)) + 1;
    const newExperiment = { 
      id: newId, 
      name: 'New Experiment', 
      status: 'inactive', 
      devices: 0, 
      lastUpdated: new Date().toISOString().split('T')[0]
    };
    setExperiments([...experiments, newExperiment]);
  };

  const filteredExperiments = experiments.filter(exp => 
    exp.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  // Render appropriate content based on active section
  const renderContent = () => {
    switch(activeSection) {
      case 'experiments':
        return (
          <div className="experiments-section">
            <div className="section-header">
              <h1 className="section-title">Experiments</h1>
              <div className="section-actions">
                <div className="search-container">
                  <Search size={16} className="search-icon" />
                  <input 
                    type="text" 
                    placeholder="Search experiments..." 
                    className="search-input"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <button className="action-button primary" onClick={addNewExperiment}>
                  <Plus size={16} />
                  <span>New Experiment</span>
                </button>
              </div>
            </div>
            
            <div className="experiments-list">
              {filteredExperiments.length > 0 ? (
                filteredExperiments.map(experiment => (
                  <div key={experiment.id} className="experiment-card">
                    <div className="experiment-info">
                      <h3 className="experiment-name">{experiment.name}</h3>
                      <div className="experiment-meta">
                        <span className={`status-badge ${experiment.status}`}>
                          {experiment.status}
                        </span>
                        <span className="meta-item">
                          {experiment.devices} devices
                        </span>
                        <span className="meta-item">
                          Updated: {experiment.lastUpdated}
                        </span>
                      </div>
                    </div>
                    <div className="experiment-actions">
                      <button 
                        className={`action-button ${experiment.status === 'active' ? 'warning' : 'success'}`}
                        onClick={() => toggleExperimentStatus(experiment.id)}
                      >
                        {experiment.status === 'active' ? <Pause size={16} /> : <Play size={16} />}
                      </button>
                      <button 
                        className="action-button danger"
                        onClick={() => deleteExperiment(experiment.id)}
                      >
                        <Delete size={16} />
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="empty-state">
                  <p>No experiments found. Create a new experiment to get started.</p>
                </div>
              )}
            </div>
          </div>
        );
      case 'entities':
        return (
          <div className="content-card">
            <h1 className="card-title">Entities Management</h1>
            <p className="card-text">
              Here you can manage all entities in your IoT system.
            </p>
            <div className="content-placeholder">
              <p className="placeholder-text">Entities content will be implemented soon</p>
            </div>
          </div>
        );
      case 'resources':
        return (
          <div className="content-card">
            <h1 className="card-title">Resources Management</h1>
            <p className="card-text">
              Here you can manage all resources and assets in your IoT system.
            </p>
            <div className="content-placeholder">
              <p className="placeholder-text">Resources content will be implemented soon</p>
            </div>
          </div>
        );
      case 'reports':
        return (
          <div className="content-card">
            <h1 className="card-title">Reports and Analytics</h1>
            <p className="card-text">
              View and generate reports on your IoT system performance.
            </p>
            <div className="content-placeholder">
              <p className="placeholder-text">Reports content will be implemented soon</p>
            </div>
          </div>
        );
      case 'settings':
        return (
          <div className="content-card">
            <h1 className="card-title">System Settings</h1>
            <p className="card-text">
              Configure your Blazecore IoT system settings.
            </p>
            <div className="content-placeholder">
              <p className="placeholder-text">Settings content will be implemented soon</p>
            </div>
          </div>
        );
      case 'help':
        return (
          <div className="content-card">
            <h1 className="card-title">Help and Support</h1>
            <p className="card-text">
              Get help and support for your Blazecore IoT system.
            </p>
            <div className="content-placeholder">
              <p className="placeholder-text">Help content will be implemented soon</p>
            </div>
          </div>
        );
      default:
        return (
          <div className="content-card">
            <h1 className="card-title">Welcome to Blazecore</h1>
            <p className="card-text">
              Select an option from the sidebar to get started. You can manage dashboards, 
              entities, resources, and more from the navigation panel.
            </p>
            <div className="content-placeholder">
              <p className="placeholder-text">Main dashboard content will appear here</p>
            </div>
          </div>
        );
    }
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
              text="Experiments" 
              isOpen={sidebarOpen} 
              isActive={activeSection === 'experiments'}
              onClick={() => handleSectionChange('experiments')}
            />
            <SidebarItem 
              icon={<Database size={18} />} 
              text="Entities" 
              isOpen={sidebarOpen} 
              isActive={activeSection === 'entities'}
              onClick={() => handleSectionChange('entities')}
            />
            <SidebarItem 
              icon={<Box size={18} />} 
              text="Resources" 
              isOpen={sidebarOpen} 
              isActive={activeSection === 'resources'}
              onClick={() => handleSectionChange('resources')}
            />
            <SidebarItem 
              icon={<FileText size={18} />} 
              text="Reports" 
              isOpen={sidebarOpen} 
              isActive={activeSection === 'reports'}
              onClick={() => handleSectionChange('reports')}
            />
            <div className="nav-divider"></div>
            <SidebarItem 
              icon={<Settings size={18} />} 
              text="Settings" 
              isOpen={sidebarOpen} 
              isActive={activeSection === 'settings'}
              onClick={() => handleSectionChange('settings')}
            />
            <SidebarItem 
              icon={<HelpCircle size={18} />} 
              text="Help" 
              isOpen={sidebarOpen} 
              isActive={activeSection === 'help'}
              onClick={() => handleSectionChange('help')}
            />
          </nav>
        </aside>
        
        {/* Main Content */}
        <main className="main-content">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

// Sidebar Item Component
const SidebarItem = ({ icon, text, isOpen, isActive = false, onClick }) => {
  return (
    <div 
      className={`nav-item ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      <div className="nav-icon">{icon}</div>
      {isOpen && <span className="nav-text">{text}</span>}
    </div>
  );
};

export default DashboardPanel;
