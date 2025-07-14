import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="gta-title text-2xl gta-gradient">GTA HOSTING</div>
              <Badge variant="secondary" className="bg-primary/20 text-primary">SAMP • CRMP</Badge>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Главная</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Хостинг</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Автоустановка</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Кабинет</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Контакты</a>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">Войти</Button>
              <Button className="gta-button text-black font-semibold" size="sm">Регистрация</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/90" />
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/img/082dd4fc-e59f-4b6d-a627-bc7208183ee5.jpg" 
            alt="Gaming Server" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="gta-title text-5xl md:text-7xl mb-6 gta-gradient leading-tight">
              ИГРОВОЙ ХОСТИНГ
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Создай свой сервер SAMP/CRMP за 60 секунд. Автоустановка модов, мгновенный запуск, полное управление.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="gta-button text-black font-semibold text-lg px-8 py-6" size="lg">
                <Icon name="Play" className="mr-2" />
                Создать сервер
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                <Icon name="Download" className="mr-2" />
                Демо версия
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <h2 className="gta-title text-3xl text-center mb-12 gta-gradient">ВОЗМОЖНОСТИ ХОСТИНГА</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="server-card">
              <CardHeader className="text-center">
                <Icon name="Server" size={48} className="mx-auto mb-4 text-primary" />
                <CardTitle className="text-primary">Панель управления</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">Полный контроль: старт, стоп, рестарт сервера одним кликом</p>
              </CardContent>
            </Card>

            <Card className="server-card">
              <CardHeader className="text-center">
                <Icon name="Activity" size={48} className="mx-auto mb-4 text-primary" />
                <CardTitle className="text-primary">Мониторинг</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">Онлайн статистика, мониторинг нагрузки и производительности</p>
              </CardContent>
            </Card>

            <Card className="server-card">
              <CardHeader className="text-center">
                <Icon name="FolderOpen" size={48} className="mx-auto mb-4 text-primary" />
                <CardTitle className="text-primary">Файл-менеджер</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">Загрузка карт, модов и скриптов через веб-интерфейс</p>
              </CardContent>
            </Card>

            <Card className="server-card">
              <CardHeader className="text-center">
                <Icon name="Shield" size={48} className="mx-auto mb-4 text-primary" />
                <CardTitle className="text-primary">Бэкапы</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">Автоматические резервные копии и быстрое восстановление</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Auto-installation Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="gta-title text-3xl text-center mb-12 gta-gradient">АВТОУСТАНОВКА МОДОВ</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-primary">Популярные моды SAMP/CRMP</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" className="text-primary" />
                  <span>Amazing RP - классический ролевой мод</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" className="text-primary" />
                  <span>Advance RP - продвинутая ролевая игра</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" className="text-primary" />
                  <span>Trinity RP - современный RP сервер</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" className="text-primary" />
                  <span>Radmir RP - популярный российский мод</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" className="text-primary" />
                  <span>Arizona RP - качественная ролевая игра</span>
                </div>
              </div>
              <Button className="gta-button text-black font-semibold mt-8" size="lg">
                <Icon name="Download" className="mr-2" />
                Установить моды
              </Button>
            </div>
            <div className="space-y-6">
              <Card className="server-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Icon name="Gamepad2" className="text-primary" />
                    <span>Установка мода</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Amazing RP</span>
                      <span>85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                    <p className="text-xs text-muted-foreground">Установка завершится через 2 минуты</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="server-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Icon name="Settings" className="text-primary" />
                    <span>Настройка сервера</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Конфигурация</span>
                      <span>100%</span>
                    </div>
                    <Progress value={100} className="h-2" />
                    <p className="text-xs text-muted-foreground">Сервер готов к запуску</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <h2 className="gta-title text-3xl text-center mb-12 gta-gradient">ТАРИФЫ ХОСТИНГА</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="server-card">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl mb-2">Starter</CardTitle>
                <CardDescription>Для начинающих</CardDescription>
                <div className="text-4xl font-bold text-primary mt-4">₽299</div>
                <p className="text-muted-foreground">/месяц</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Icon name="Check" className="text-primary" size={16} />
                  <span>До 50 слотов</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" className="text-primary" size={16} />
                  <span>4 GB RAM</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" className="text-primary" size={16} />
                  <span>20 GB SSD</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" className="text-primary" size={16} />
                  <span>Автоустановка модов</span>
                </div>
                <Button className="w-full mt-6" variant="outline">Выбрать</Button>
              </CardContent>
            </Card>

            <Card className="server-card border-primary">
              <CardHeader className="text-center">
                <Badge className="gta-button text-black font-semibold mb-2">Популярный</Badge>
                <CardTitle className="text-2xl mb-2">Pro</CardTitle>
                <CardDescription>Для профессионалов</CardDescription>
                <div className="text-4xl font-bold text-primary mt-4">₽699</div>
                <p className="text-muted-foreground">/месяц</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Icon name="Check" className="text-primary" size={16} />
                  <span>До 200 слотов</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" className="text-primary" size={16} />
                  <span>8 GB RAM</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" className="text-primary" size={16} />
                  <span>50 GB SSD</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" className="text-primary" size={16} />
                  <span>Приоритетная поддержка</span>
                </div>
                <Button className="gta-button text-black font-semibold w-full mt-6">Выбрать</Button>
              </CardContent>
            </Card>

            <Card className="server-card">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl mb-2">Enterprise</CardTitle>
                <CardDescription>Для крупных проектов</CardDescription>
                <div className="text-4xl font-bold text-primary mt-4">₽1299</div>
                <p className="text-muted-foreground">/месяц</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Icon name="Check" className="text-primary" size={16} />
                  <span>До 500 слотов</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" className="text-primary" size={16} />
                  <span>16 GB RAM</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" className="text-primary" size={16} />
                  <span>100 GB SSD</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" className="text-primary" size={16} />
                  <span>Персональный менеджер</span>
                </div>
                <Button className="w-full mt-6" variant="outline">Выбрать</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Dashboard Demo */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="gta-title text-3xl text-center mb-12 gta-gradient">ДЕМО ЛИЧНОГО КАБИНЕТА</h2>
          <div className="max-w-6xl mx-auto">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="dashboard">Панель</TabsTrigger>
                <TabsTrigger value="files">Файлы</TabsTrigger>
                <TabsTrigger value="stats">Статистика</TabsTrigger>
                <TabsTrigger value="backups">Бэкапы</TabsTrigger>
              </TabsList>
              
              <TabsContent value="dashboard" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="server-card">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Icon name="Server" className="text-primary" />
                        <span>Статус сервера</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center space-x-4">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-green-500 font-semibold">Онлайн</span>
                      </div>
                      <div className="mt-4 space-y-2">
                        <div className="flex justify-between">
                          <span>Игроков:</span>
                          <span className="text-primary">47/200</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Аптайм:</span>
                          <span>15 дней 6 часов</span>
                        </div>
                      </div>
                      <div className="flex space-x-2 mt-6">
                        <Button className="gta-button text-black font-semibold flex-1">
                          <Icon name="Square" className="mr-2" />
                          Стоп
                        </Button>
                        <Button variant="outline" className="flex-1">
                          <Icon name="RotateCcw" className="mr-2" />
                          Рестарт
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="server-card">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Icon name="Activity" className="text-primary" />
                        <span>Производительность</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>CPU</span>
                          <span>35%</span>
                        </div>
                        <Progress value={35} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>RAM</span>
                          <span>6.2/8 GB</span>
                        </div>
                        <Progress value={77} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>Диск</span>
                          <span>12/50 GB</span>
                        </div>
                        <Progress value={24} className="h-2" />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="files" className="space-y-6">
                <Card className="server-card">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Icon name="Folder" className="text-primary" />
                      <span>Файловый менеджер</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-secondary/50 cursor-pointer">
                        <Icon name="Folder" className="text-primary" />
                        <span>gamemode</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-secondary/50 cursor-pointer">
                        <Icon name="Folder" className="text-primary" />
                        <span>plugins</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-secondary/50 cursor-pointer">
                        <Icon name="FileText" className="text-muted-foreground" />
                        <span>server.cfg</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-secondary/50 cursor-pointer">
                        <Icon name="FileText" className="text-muted-foreground" />
                        <span>samp-server.exe</span>
                      </div>
                    </div>
                    <Button className="w-full mt-4" variant="outline">
                      <Icon name="Upload" className="mr-2" />
                      Загрузить файлы
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="stats">
                <Card className="server-card">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Icon name="BarChart3" className="text-primary" />
                      <span>Статистика игроков</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">1,247</div>
                        <p className="text-sm text-muted-foreground">Всего игроков</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">47</div>
                        <p className="text-sm text-muted-foreground">Сейчас онлайн</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">89</div>
                        <p className="text-sm text-muted-foreground">Пик за день</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">156</div>
                        <p className="text-sm text-muted-foreground">Рекорд</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="backups">
                <Card className="server-card">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Icon name="Archive" className="text-primary" />
                      <span>Резервные копии</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 rounded-lg bg-secondary/20">
                        <div className="flex items-center space-x-3">
                          <Icon name="Archive" className="text-primary" />
                          <div>
                            <div className="font-medium">Backup_2024-01-15_14-30</div>
                            <div className="text-sm text-muted-foreground">156 MB</div>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Icon name="Download" className="mr-2" size={16} />
                            Скачать
                          </Button>
                          <Button size="sm" className="gta-button text-black">
                            <Icon name="RotateCcw" className="mr-2" size={16} />
                            Восстановить
                          </Button>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-3 rounded-lg bg-secondary/20">
                        <div className="flex items-center space-x-3">
                          <Icon name="Archive" className="text-primary" />
                          <div>
                            <div className="font-medium">Backup_2024-01-14_14-30</div>
                            <div className="text-sm text-muted-foreground">148 MB</div>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Icon name="Download" className="mr-2" size={16} />
                            Скачать
                          </Button>
                          <Button size="sm" className="gta-button text-black">
                            <Icon name="RotateCcw" className="mr-2" size={16} />
                            Восстановить
                          </Button>
                        </div>
                      </div>
                    </div>
                    <Button className="w-full mt-4 gta-button text-black font-semibold">
                      <Icon name="Plus" className="mr-2" />
                      Создать бэкап
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="gta-title text-xl gta-gradient mb-4">GTA HOSTING</div>
              <p className="text-muted-foreground">
                Лучший игровой хостинг для серверов SAMP и CRMP с автоустановкой модов.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Хостинг серверов</a></li>
                <li><a href="#" className="hover:text-primary">Автоустановка модов</a></li>
                <li><a href="#" className="hover:text-primary">Техподдержка</a></li>
                <li><a href="#" className="hover:text-primary">Мониторинг</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary">База знаний</a></li>
                <li><a href="#" className="hover:text-primary">Документация</a></li>
                <li><a href="#" className="hover:text-primary">Форум</a></li>
                <li><a href="#" className="hover:text-primary">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>support@gtahosting.ru</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="MessageCircle" size={16} />
                  <span>Telegram: @gtahosting</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (495) 123-45-67</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
            <p>&copy; 2024 GTA Hosting. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}