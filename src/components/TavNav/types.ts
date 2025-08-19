export type Tab = {
  id: string;
  label: string;
}

export type TabNavProps = {
  tabs: Tab[];
  selectedTab: string;
  onTabChange: (id: string) => void;
}