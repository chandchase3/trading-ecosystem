import SideColumnShell from "./sideColumnShells/SideColumnShell";

export default function MainColumnLeft() {
  // const panelType = useSelector((state) => state.workspace.leftPanel.config.type);

  return (
    <SideColumnShell panel="leftPanel" direction="left">
      
    </SideColumnShell>
  );
}
