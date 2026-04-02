interface ErrorProps {
  text?: string;
  isError: string | boolean;
}

export function ErrorUI({ isError, text = "Error" }: ErrorProps) {
  return isError ? (
    <div className="flex justify-center">
      <div className="w-32 rounded-full border-2 border-red-800 bg-red-800 p-1 px-4 text-center">
        {text}
      </div>
    </div>
  ) : null;
}
