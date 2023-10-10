import React, { useState } from 'react';

// Создаем интерфейс для данных профиля пользователя
interface UserProfile {
  id: number;
  user_name: string;
  user_about: string;
  user_age: number;
  user_tg: string;
  user_mobile: string;
}

interface EditProfileProps {
  profile: UserProfile;
  onSave: (updatedProfile: UserProfile) => void;
  onCancel: () => void;
}

const EditProfile: React.FC<EditProfileProps> = ({ profile, onSave, onCancel }) => {
  // Создаем состояние для редактирования данных профиля
  const [editedProfile, setEditedProfile] = useState<UserProfile>(profile);

  // Обработчик изменения имени пользователя
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedProfile({ ...editedProfile, user_name: e.target.value });
  };

  // Обработчик изменения возраста пользователя
  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedProfile({ ...editedProfile, user_age: Number(e.target.value) });
  };

  // Обработчик сохранения изменений
  const handleSave = () => {
    onSave(editedProfile); // Вызываем функцию onSave и передаем обновленные данные
  };

  // Обработчик отмены редактирования
  const handleCancel = () => {
    onCancel(); // Вызываем функцию onCancel для закрытия редактирования
  };

  return (
    <div>
      <h2>Редактирование профиля</h2>
      <label>
        Имя:
        <input
          type="text"
          value={editedProfile.user_name}
          onChange={handleNameChange}
        />
      </label>
      <label>
        Возраст:
        <input
          type="number"
          value={editedProfile.user_age}
          onChange={handleAgeChange}
        />
      </label>
      {/* Добавьте другие поля для редактирования здесь */}
      <button onClick={handleSave}>Сохранить</button>
      <button onClick={handleCancel}>Отмена</button>
    </div>
  );
};

export default EditProfile;


