interface FormErrorProps {
  message: string;
}

export function FormError({ message }: FormErrorProps) {
  return (
    <div className="rounded-md bg-red-50 p-4">
      <p className="text-sm text-red-800">{message}</p>
    </div>
  );
}