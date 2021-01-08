import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateStatus } from '../../../redux/profileReducer';

const ProfileStatus = (props) => {
  const [editMode, setEditMode] = useState(false);
  //! Убрать
  const [status, setStatus] = useState(props.status);

  const dispatch = useDispatch();

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    dispatch(updateStatus(status));
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  return (
    <div>
      {!editMode && (
        <div>
          <span
            title='Double click to change status'
            onDoubleClick={activateEditMode}
          >
            {props.status || 'No Status'}
          </span>
        </div>
      )}
      {editMode && (
        <div>
          <input
            autoFocus
            onBlur={deactivateEditMode}
            onChange={onStatusChange}
            value={status}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileStatus;
