const Tabs = ({currentTab, setTab}) => {
    const TABS = [
        "Trending",
        "Latest",
    ] 
  return (
    <div className="mt-16 flex justify-center">
        <div className="tabs">
            {TABS.map(t => 
        <span onClick={() => setTab(t)} key={t} className={`tab tab-bordered ${currentTab.toLowerCase() === t.toLowerCase() ? "tab-active" : ""}`}>{t}</span>
                )}
        </div>
    </div>
  );
};

export default Tabs;
