import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  menuItems = [
    { icon: '🏠', label: 'Главная', link: '/' },
    { icon: '📊', label: 'Дашборд', link: '/dashboard' },
    { icon: '📝', label: 'Записи', link: '/posts' },
    { icon: '👥', label: 'Пользователи', link: '/users' },
    { icon: '⚙️', label: 'Настройки', link: '/settings' },
    { icon: '📚', label: 'Документация', link: '/docs' },
    { icon: '📧', label: 'Сообщения', link: '/messages' },
    { icon: '📈', label: 'Аналитика', link: '/analytics' }
  ];
}
