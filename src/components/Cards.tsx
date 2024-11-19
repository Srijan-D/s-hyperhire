'use client';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import CardsClient from './CardsClient';

const fetchSampleProfiles = async () => {
  const res = await fetch('/api/sample-profiles');
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  return res.json();
};

const Cards = () => {
  const {
    data: sampleProfiles,
    error,
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: ['sampleProfiles'],
    queryFn: fetchSampleProfiles,
  });

  if (isLoading || isFetching) {
    return <div className="animate-bounce w-full">Loading profiles...</div>;
  }

  if (error) {
    return <div>Error loading profiles: {error.message}</div>;
  }

  return <CardsClient sampleProfiles={sampleProfiles} />;
};

export default Cards;
