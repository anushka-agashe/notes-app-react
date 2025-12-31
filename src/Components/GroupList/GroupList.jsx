import React, { useContext, useState } from "react";
import { AppContextData } from "../../Context/AppContext";
import CreateGroupModal from "../CreateGroupModal/CreateGroupModal";
import createGrp from "../../assets/create-grp.png";
import "./GroupList.css";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const GroupList = () => {
  const navigate = useNavigate();
  const isMobileView = useMediaQuery({ maxWidth: 768 });
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const { groups, selectGroup, currentGroupId } = useContext(AppContextData);
  const handleCreateModal = () => {
    setIsCreateModalOpen(true);
  };

  const groupSelect = (groupId) => {
    selectGroup(groupId);
    if (isMobileView) {
      navigate(`/group/${groupId}`); // ONLY mobile
    }
  };

  return (
    <>
      <div className="groupItems">
        <h3>Pocket Notes</h3>

        {groups.map((item) => {
          return (
            <div
              className={`item ${currentGroupId === item.id ? "active" : ""}`}
              key={item.id}
              onClick={() => groupSelect(item.id)}
            >
              <div className="icon" style={{ backgroundColor: item.color }}>
                {item.name
                  .split(" ")
                  .map((word) => word[0])
                  .join("")
                  .toUpperCase()
                  .slice(0, 2)}
              </div>
              <div className="groupName">{item.name}</div>
            </div>
          );
        })}

        <img id="img1" src={createGrp} alt="" onClick={handleCreateModal} />
        {isCreateModalOpen && (
          <CreateGroupModal onClose={() => setIsCreateModalOpen(false)} />
        )}
      </div>
    </>
  );
};

export default GroupList;
