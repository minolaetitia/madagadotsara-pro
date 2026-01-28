import React from 'react';

interface FormInputProps {
  label: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: string;
  required?: boolean;
  textarea?: boolean;
  rows?: number;
}

export default function FormInput({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  required = false,
  textarea = false,
  rows = 4,
}: FormInputProps) {
  return (
    <div className="space-y-2">
      <label className="block text-white font-medium">
        {label}
        {required && <span className="text-red-400 ml-1">*</span>}
      </label>
      {textarea ? (
        <textarea
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          rows={rows}
          className={`w-full bg-gray-800 border rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:ring-1 transition-colors ${
            error
              ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
              : 'border-gray-700 focus:border-purple-600 focus:ring-purple-600'
          }`}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`w-full bg-gray-800 border rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:ring-1 transition-colors ${
            error
              ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
              : 'border-gray-700 focus:border-purple-600 focus:ring-purple-600'
          }`}
        />
      )}
      {error && <p className="text-red-400 text-sm">{error}</p>}
    </div>
  );
}
