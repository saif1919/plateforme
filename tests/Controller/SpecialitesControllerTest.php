<?php

namespace App\Test\Controller;

use App\Entity\Specialites;
use App\Repository\SpecialitesRepository;
use Symfony\Bundle\FrameworkBundle\KernelBrowser;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class SpecialitesControllerTest extends WebTestCase
{
    private KernelBrowser $client;
    private SpecialitesRepository $repository;
    private string $path = '/specialites/';

    protected function setUp(): void
    {
        $this->client = static::createClient();
        $this->repository = static::getContainer()->get('doctrine')->getRepository(Specialites::class);

        foreach ($this->repository->findAll() as $object) {
            $this->repository->remove($object, true);
        }
    }

    public function testIndex(): void
    {
        $crawler = $this->client->request('GET', $this->path);

        self::assertResponseStatusCodeSame(200);
        self::assertPageTitleContains('Specialite index');

        // Use the $crawler to perform additional assertions e.g.
        // self::assertSame('Some text on the page', $crawler->filter('.p')->first());
    }

    public function testNew(): void
    {
        $originalNumObjectsInRepository = count($this->repository->findAll());

        $this->markTestIncomplete();
        $this->client->request('GET', sprintf('%snew', $this->path));

        self::assertResponseStatusCodeSame(200);

        $this->client->submitForm('Save', [
            'specialite[nom]' => 'Testing',
            'specialite[description]' => 'Testing',
            'specialite[patients]' => 'Testing',
            'specialite[admin]' => 'Testing',
        ]);

        self::assertResponseRedirects('/specialites/');

        self::assertSame($originalNumObjectsInRepository + 1, count($this->repository->findAll()));
    }

    public function testShow(): void
    {
        $this->markTestIncomplete();
        $fixture = new Specialites();
        $fixture->setNom('My Title');
        $fixture->setDescription('My Title');
        $fixture->setPatients('My Title');
        $fixture->setAdmin('My Title');

        $this->repository->save($fixture, true);

        $this->client->request('GET', sprintf('%s%s', $this->path, $fixture->getId()));

        self::assertResponseStatusCodeSame(200);
        self::assertPageTitleContains('Specialite');

        // Use assertions to check that the properties are properly displayed.
    }

    public function testEdit(): void
    {
        $this->markTestIncomplete();
        $fixture = new Specialites();
        $fixture->setNom('My Title');
        $fixture->setDescription('My Title');
        $fixture->setPatients('My Title');
        $fixture->setAdmin('My Title');

        $this->repository->save($fixture, true);

        $this->client->request('GET', sprintf('%s%s/edit', $this->path, $fixture->getId()));

        $this->client->submitForm('Update', [
            'specialite[nom]' => 'Something New',
            'specialite[description]' => 'Something New',
            'specialite[patients]' => 'Something New',
            'specialite[admin]' => 'Something New',
        ]);

        self::assertResponseRedirects('/specialites/');

        $fixture = $this->repository->findAll();

        self::assertSame('Something New', $fixture[0]->getNom());
        self::assertSame('Something New', $fixture[0]->getDescription());
        self::assertSame('Something New', $fixture[0]->getPatients());
        self::assertSame('Something New', $fixture[0]->getAdmin());
    }

    public function testRemove(): void
    {
        $this->markTestIncomplete();

        $originalNumObjectsInRepository = count($this->repository->findAll());

        $fixture = new Specialites();
        $fixture->setNom('My Title');
        $fixture->setDescription('My Title');
        $fixture->setPatients('My Title');
        $fixture->setAdmin('My Title');

        $this->repository->save($fixture, true);

        self::assertSame($originalNumObjectsInRepository + 1, count($this->repository->findAll()));

        $this->client->request('GET', sprintf('%s%s', $this->path, $fixture->getId()));
        $this->client->submitForm('Delete');

        self::assertSame($originalNumObjectsInRepository, count($this->repository->findAll()));
        self::assertResponseRedirects('/specialites/');
    }
}
