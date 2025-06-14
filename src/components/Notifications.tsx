import React from 'react';
import { Bell, X } from 'lucide-react';

interface Notification {
  id: string;
  type: 'price-drop' | 'new-item' | 'restock';
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
}

interface NotificationsProps {
  notifications: Notification[];
  isOpen: boolean;
  onClose: () => void;
  onMarkAsRead: (id: string) => void;
  onClearAll: () => void;
}

export const Notifications: React.FC<NotificationsProps> = ({
  notifications,
  isOpen,
  onClose,
  onMarkAsRead,
  onClearAll,
}) => {
  if (!isOpen) return null;

  const getNotificationIcon = (type: Notification['type']) => {
    switch (type) {
      case 'price-drop':
        return '💰';
      case 'new-item':
        return '🆕';
      case 'restock':
        return '📦';
      default:
        return '🔔';
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
      <div className="bg-white w-full max-w-md h-full overflow-y-auto">
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-xl font-semibold">Notifications</h2>
          <div className="flex items-center space-x-2">
            {notifications.length > 0 && (
              <button
                onClick={onClearAll}
                className="text-sm text-gray-500 hover:text-gray-700"
              >
                Clear all
              </button>
            )}
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
        
        <div className="p-4">
          {notifications.length === 0 ? (
            <div className="text-center py-8">
              <Bell className="h-12 w-12 mx-auto text-gray-400" />
              <p className="text-gray-500 mt-4">No notifications yet</p>
              <p className="text-sm text-gray-400 mt-2">
                We'll notify you about price drops and new items
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-4 rounded-lg border ${
                    notification.read ? 'bg-white' : 'bg-blue-50'
                  }`}
                  onClick={() => onMarkAsRead(notification.id)}
                >
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">
                      {getNotificationIcon(notification.type)}
                    </span>
                    <div className="flex-1">
                      <h3 className="font-medium">{notification.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {notification.message}
                      </p>
                      <p className="text-xs text-gray-400 mt-2">
                        {notification.timestamp}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}; 