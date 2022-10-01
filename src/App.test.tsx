import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('does subtitle exist', () => {
  render(<App />);
  const linkElement = screen.getByText(/Making your domains... small/i);
  expect(linkElement).toBeInTheDocument();
});

test('does tech stack info exist', () => {
  render(<App />);
  const linkElement = screen.getByText(/Powered by AWS, Typescript, React, Go, Java \(Spring Webflux\), Terraform, GitHub Actions/i);
  expect(linkElement).toBeInTheDocument();
});