
const PremiumLoading = ({isLoading}) => {
    {/* Premium Skeleton Shimmer States (Centered Placement) */}
        {isLoading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="w-full space-y-4 animate-pulse">
                <div className="aspect-[3/4] w-full bg-gray-100 rounded-sm" />
                <div className="h-4 bg-gray-100 w-3/4" />
                <div className="h-3 bg-gray-100 w-1/2" />
              </div>
            ))}
          </div>
        )}
    return (
        <div>
        </div>
    );
};

export default PremiumLoading;