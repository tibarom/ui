import { useState, useRef, useEffect, HtmlHTMLAttributes } from 'react';

import { Button } from "@/registry/new-york/ui/button"
import { Input } from "@/registry/new-york/ui/input"
import { Label } from "@/registry/new-york/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/registry/new-york/ui/popover";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/new-york/ui/tabs"
import { ScrollArea } from "@/registry/new-york/ui/scroll-area"
import { Icons } from '@/components/icons';
import { DscLogo } from '@/components/icons/dscLogo';
import { Upload } from "lucide-react"
// import { useWeb3 } from "@/hooks/use-web3-hook"; // Web3 훅을 사용하기 위한 가상 경로

export function PopoverButton() {
    // const { createInscription } = useWeb3(); // 메타마스크와 상호작용하기 위한 함수

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [artist, setArtist] = useState('');
    const [soundFile, setSoundFile] = useState("null");
    const [coverImageFile, setCoverImageFile] = useState(null);

    const [quantity, setQuantity] = useState('');

    const handleSoundFileChange = (event: any) => {
      setSoundFile(event.target.files[0]);
    };

    const handleCoverImageFileChange = (event: any) => {
      setCoverImageFile(event.target.files[0]);
    };

    const handleSubmit = async () => {
      // IPFS 업로드 및 트랜잭션 생성 로직 구현
      // const ipfsHash = await uploadFilesToIPFS(soundFile, imageFile, title, description);
      // createInscription(ipfsHash, quantity);
    };

    return (
      <Popover>
        <PopoverTrigger asChild>
        <Button 
                  className="w-20 h-20 rounded-full"
                  variant="outline" 
                  style={{
                    borderColor: 'initial'
                  }}
                >
                  { <DscLogo className="transform scale-y-[-1.5] scale-x-[-1.5] mr-2 mb-1" />}
        </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80 border-primary mr-12">
          <ScrollArea className="w-72 h-80">
            <div className="grid gap-4 ml-[1px] mr-4 ">
              <div className="grid grid-cols-2 items-center gap-4">
                <Label htmlFor="description"></Label>
                <Input
                  placeholder="Get us your Doge Sound!"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="col-span-2 h-24" // 높이 조정을 통한 변경
                />
              </div>
            <div className="grid grid-cols-1 items-center gap-4">
              <Label htmlFor="sound">Sound</Label>
              <Input
                type="file"
                accept=".mp3,.m4a"
                onChange={handleSoundFileChange}
              />
            </div>
            <div className="grid grid-cols-1 items-center gap-4">
              <Label htmlFor="cover">Cover</Label>
              <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file">
              </input>
            </div>
            <Tabs defaultValue="post" className="">
                  <TabsList className="grid w-full grid-cols-2 border-0 border mb-4">
                    <TabsTrigger value="post">Post</TabsTrigger>
                    <TabsTrigger value="deploy">Deploy</TabsTrigger>
                  </TabsList>
                  <TabsContent value="post">
                  </TabsContent>
                  <TabsContent value="deploy">
                    <div>

                  <div className="grid grid-cols-2 items-center gap-4">
                    <Label htmlFor="quantity">Quantity</Label>
                    <Input
                      placeholder="Quantity"
                      value={quantity}
                      onChange={(e) => setDescription(e.target.value)}
                      className="col-span-2" // 높이 조정을 통한 변경
                  />
                  </div>
                    </div>
                  </TabsContent>
            </Tabs>
            <Button onClick={handleSubmit}>Confirm</Button>
            </div>
          </ScrollArea>
        </PopoverContent>
      </Popover>
    )
}