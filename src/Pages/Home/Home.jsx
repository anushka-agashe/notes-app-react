import React, { useContext } from "react";
import CreateGroupModal from "../../Components/CreateGroupModal/CreateGroupModal";
import GroupList from "../../Components/GroupList/GroupList";
import "./Home.css";
import NoteEditor from "../../Components/NoteEditor/NoteEditor";
import GroupHeader from "../../Components/GroupHeader/GroupHeader";
import { AppContextData } from "../../Context/AppContext";
import NotesList from "../../Components/NotesList/NotesList";
import RightPanel from "../../Components/RightPanel/RightPanel";
import { useMediaQuery } from "react-responsive";

const Home = () => {
  const { groups, currentGroupId } = useContext(AppContextData);

  const currentGroup = groups.find((group) => group.id === currentGroupId);

  const isMobileView = useMediaQuery({ maxWidth: 768 });

  return (
    <div className="container">
      {/* LEFT PANEL */}
      <GroupList />

      {/* RIGHT PANEL */}
      {!isMobileView && (
        <div className="rightPanel">
          {!currentGroup && <RightPanel />}

          {currentGroup && (
            <>
              <GroupHeader group={currentGroup} showBack={false} />
              <NotesList />
              <NoteEditor />
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
