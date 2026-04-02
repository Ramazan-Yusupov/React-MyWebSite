interface LoadingUIProps {
  text?: string;
  isLoading: boolean;
}

export function LoadingUI({ isLoading, text = "Loading..." }: LoadingUIProps) {
  return isLoading ? (
    <div className="flex justify-center">
      <div className="w-32 animate-pulse rounded-full border-2 border-gray-300 bg-gray-300 p-1 px-4 text-center text-gray-600">
        {text}
      </div>
    </div>
  ) : null;
}
