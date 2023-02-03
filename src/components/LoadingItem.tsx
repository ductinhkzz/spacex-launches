function LoadingItem({ canLoadMore }: any) {
  if (!canLoadMore) {
    return null;
  }
  return (
    <div
      style={{
        padding: '2rem',
        display: 'flex',
        justifyContent: 'center',
      }}>
      Loading...
    </div>
  );
}

export { LoadingItem };
