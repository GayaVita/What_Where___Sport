import React, { useState } from 'react';
import { ProfileFormType } from '../userLC/components_LC/profile_form/ProfileForm';


interface EditProfileProps {
  profile: ProfileFormType; // UserProfile - тип данных вашего профиля
  onSave: (updatedProfile: ProfileFormType) => void;
  onCancel: () => void;
}

const EditProfile: React.FC<EditProfileProps> = ({ profile, onSave, onCancel }) => {
  const [editedProfile, setEditedProfile] = useState<ProfileFormType>(profile);

  const handleSave = () => {
    // Вы можете отправить обновленные данные на сервер здесь
    onSave(editedProfile);
  };

  const handleCancel = () => {
    onCancel();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedProfile({ ...editedProfile, [name]: value });
  };

  return (
    <div>
      <h2>Редактирование профиля</h2>
      <form>
        <label>
          Имя:
          <input
            type="text"
            name="user_name"
            value={editedProfile.user_name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Возраст:
          <input
            type="number"
            name="user_age"
            value={editedProfile.user_age}
            onChange={handleInputChange}
          />
        </label>
        {/* Добавьте другие поля редактирования здесь */}
        <button type="button" onClick={handleSave}>
          Сохранить
        </button>
        <button type="button" onClick={handleCancel}>
          Отмена
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
