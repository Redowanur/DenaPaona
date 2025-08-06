import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

// Define the shape of the context
interface DeviceContextType {
  isMobile: boolean;
}

// Create the context
const DeviceContext = createContext<DeviceContextType>({ isMobile: false });

// Create the provider
export const DeviceProvider = ({ children }: { children: ReactNode }) => {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    // Add resize listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <DeviceContext.Provider value={{ isMobile }}>
      {children}
    </DeviceContext.Provider>
  );
};

// Custom hook to use the context
export const useDevice = () => useContext(DeviceContext);
