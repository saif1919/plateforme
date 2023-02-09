<?php

namespace App\Controller;

use App\Repository\MedecinRepository;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class Test2Controller extends AbstractController
{
    #[Route('/test2', name: 'app_test2')]
    public function index(UserRepository $userRepository): Response
    {
        return $this->render('dashboard.html.twig', [
            'users' => $userRepository->findAll(),
        ]);
    }

    #[Route('/list', name: 'app_list')]
    public function list(MedecinRepository $userRepository): Response
    {
        return $this->render('Medecin/index.html.twig', [
            'medecins' => $userRepository->findAll(),
        ]);
    }

}
