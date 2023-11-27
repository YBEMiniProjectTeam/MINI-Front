const initMockAPI = async (): Promise<void> => {
  const { worker } = await import("@mocks/browser");
  worker.start();
};

export default initMockAPI;
