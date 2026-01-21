import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PaperIndustryCase: React.FC = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    navigate('/cases');
  }, [navigate]);

  return null;
};

export default PaperIndustryCase;