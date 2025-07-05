
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Heart } from 'lucide-react';

interface AuthFormProps {
  onLogin: (email: string, password: string) => void;
}

const AuthForm: React.FC<AuthFormProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-nostalgic-blue/20 via-nostalgic-lavender/20 to-nostalgic-beige/20 p-4">
      <Card className="w-full max-w-md bg-white/80 backdrop-blur-sm shadow-2xl border-0 fade-in">
        <CardHeader className="text-center space-y-4 pb-8">
          <div className="flex justify-center">
            <Heart className="h-12 w-12 text-nostalgic-blue/80" />
          </div>
          <CardTitle className="text-2xl font-light text-gray-700">
            Una Despedida Especial
          </CardTitle>
          <CardDescription className="text-gray-600 text-sm leading-relaxed">
            Esta página ha sido creada especialmente para ti. <br />
            Por favor, ingresa para ver tu mensaje.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-700 font-medium">
                Correo Electrónico
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/70 border-gray-200 focus:border-nostalgic-blue/50 transition-colors"
                placeholder="tu@email.com"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-700 font-medium">
                Contraseña
              </Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-white/70 border-gray-200 focus:border-nostalgic-blue/50 transition-colors"
                placeholder="••••••••"
                required
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-nostalgic-blue hover:bg-nostalgic-blue/90 text-white font-medium py-2.5 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Entrar
            </Button>
          </form>
          <div className="text-center text-xs text-gray-500 mt-6">
            Hecho con amor para alguien muy especial ♥
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthForm;
